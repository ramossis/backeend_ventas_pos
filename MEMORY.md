# MEMORY.md

Memoria de trabajo del repositorio. [AGENTS.md](./AGENTS.md) contiene las reglas estables; este archivo guarda el estado actual, decisiones y pendientes. Actualizarlo cuando cambie el estado del repo.

## Estado actual (2026-11-24)

- Rama `feature/categories-crud`, HEAD `5d5d433 workong cruds`. Todo el trabajo de CRUD está sin commitear; `AGENTS.md` y `MEMORY.md` siguen sin trackear.
- CRUD completo (`GET /`, `POST /`, `PUT /:id`, `DELETE /:id`) para las 11 tablas: `categories`, `customers`, `suppliers`, `roles`, `users`, `discounts`, `products`, `sales`, `sale_items`, `purchases`, `warranty_tickets`.
- `products` dejó de ser un arreglo en memoria y ahora consulta la tabla `products`.
- Verificado de punta a punta contra MySQL en orden de dependencias: crear rol → usuario → cliente/proveedor/descuento → producto → venta → detalle → compra → ticket; `POST` 201, `GET` con el registro, `PUT` 200 con el cambio persistido, `DELETE` 200 y lectura posterior sin el registro. Todas las tablas de prueba quedaron limpias (solo persiste la categoría que ya existía).
- Los modelos ahora lanzan (`throw`) los errores; los controladores responden `500` real. `GET /api/users` no devuelve `password`.
- Sigue sin haber validación de entrada, hash de contraseñas, transacciones, cálculo de totales/stock ni `GET /:id`. Actualizar/eliminar con id inexistente responde `200` porque no se revisa `affectedRows`.
- No hay tests, lint, formatter ni CI; `npm test` es un stub que siempre sale con código 1. La verificación se hace con `curl`/`fetch` y relectura en BD.
- `.env` (con credenciales locales) y `node_modules/` están trackeados en git; no existe `.gitignore`.

## Decisiones y convenciones

- Mantener CommonJS (`require`/`module.exports`) y un único pool en `src/config/db.js`.
- Capas: `src/models/<Recurso>.js` (SQL), `src/controllers/<recurso>.controller.js` (HTTP), `src/routes/<recurso>.route.js` (cableado), montadas a mano en `app.js`.
- SQL crudo con `db.query(sql, [params])` y placeholders `?`; sin ORM ni migraciones.
- Los modelos lanzan el error y los controladores lo capturan para responder `500`.
- `PUT` reemplaza la fila completa: el body debe traer todos los campos obligatorios; los opcionales omitidos se guardan como `null` y se aplican los defaults del esquema.
- Recursos con varias palabras: archivos camelCase (`saleItems.*`, `warrantyTickets.*`) y URL kebab-case (`/api/sale-items`, `/api/warranty-tickets`). `product.route.js` conserva el singular histórico.
- `users`: el `SELECT` excluye `password`, pero se guarda en texto plano (no hay bcrypt en dependencias).
- Alcance actual: CRUD simple por tabla, sin lógica de negocio (la venta no crea ítems ni descuenta stock).
- Código, mensajes y esquema en español.

## Pendientes

- [ ] Revisar `affectedRows` en update/delete para responder `404` cuando el id no existe.
- [ ] Mapear errores de FK a `409` en vez de `500`.
- [ ] Agregar `GET /:id` a todos los recursos (incluida `categories`).
- [ ] Hashear contraseñas con bcrypt y no devolverlas nunca.
- [ ] Validar bodies y enums antes de llegar al SQL.
- [ ] Si se requiere lógica real: venta + ítems en transacción y descuento de stock.
- [ ] Agregar `.gitignore` y sacar `node_modules/` y `.env` del índice con `git rm --cached`.
- [ ] Commitear el CRUD completo y los archivos `AGENTS.md`/`MEMORY.md`.

## Historial

- 2026-11-17: creados `AGENTS.md` y `MEMORY.md`; verificado el arranque, `GET /api/categories` y el fallo silencioso de `POST /api/categories` (body parser ausente + columna distinta).
- 2026-11-17: CRUD de categorías completo; registrado `express.json()`; `DB_NAME` cambiado a `ventas_pos_me`; verificado leyendo la BD después de cada escritura.
- 2026-11-24: CRUD completo de las 11 tablas siguiendo el patrón de capas; `Products` migrado a MySQL; modelos cambiados a `throw`; verificación integral con creación, actualización, borrado y limpieza.
