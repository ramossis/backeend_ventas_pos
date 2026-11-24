# AGENTS.md — backend_c (Ventas POS API)

Express 5 (CommonJS) REST API over MySQL for a POS system. Code, comments, and schema names are in Spanish.

Session state, decisions, and pending work live in [MEMORY.md](./MEMORY.md). Read it before starting and update it when the repo state changes.

## Run & verify

- `npm install`, then `npm run dev` (nodemon, `app.js`, port from `.env`, currently 3001) or `node app.js` for a one-off run.
- No test suite, linter, formatter, typecheck, or CI. `npm test` is a stub that always exits 1 — do not treat it as a real test command.
- Verify changes by starting the server and exercising it, e.g. `curl localhost:3001/api/categories`.
- `.env` is committed (local creds included) and loaded via `dotenv` in both `app.js` and `src/config/db.js`. No `.env.example`.

## Database

- `src/config/db.js` exports a `mysql2/promise` pool (`connectionLimit: 10`). A local MySQL instance must be running; queries fail at request time, not at startup.
- No migrations or ORM. Apply `ventas_pos_me.sql` manually: it is a schema-only phpMyAdmin dump with **no `CREATE DATABASE`/`USE` and no seed data**, so create the database and import it into `DB_NAME` (`ventas_pos_me`, which matches the dump's `category_name` schema).
- Use `db.query(sql, [params])` with `?` placeholders (see `src/models/Categories.js`). Primary keys are `<table>_id` and are not always the singular table name (`users` → `users_id`); read the dump instead of guessing column names.
- `.env` sets `DB_NAME=ventas_pos_me`, which matches the dump. A second local DB, `ventas_pos`, is an ad-hoc schema with only `categories (category_id, name, description)`; don't assume it mirrors the dump. Check `SHOW TABLES` / `SHOW COLUMNS` before writing SQL.

## Architecture

- `app.js` mounts 11 routers: `/api/products`, `/api/categories`, `/api/customers`, `/api/suppliers`, `/api/roles`, `/api/users`, `/api/discounts`, `/api/sales`, `/api/sale-items`, `/api/purchases`, `/api/warranty-tickets`. Adding a resource means: model in `src/models/PascalCase.js` (raw SQL), controller in `src/controllers/<name>.controller.js` (HTTP handling), router in `src/routes/<name>.route.js` (wiring only), then mounting it in `app.js`.
- Every resource exposes `GET /`, `POST /`, `PUT /:id`, `DELETE /:id`. There is no `GET /:id`, and update/delete do not check `affectedRows` (an unknown id still answers `200`).
- `app.js` registers `express.json()` before the routers; keep body parsing there.
- Route filenames are plural except the historical `product.route.js`. Multiword resources use camelCase files (`saleItems.route.js`, `warrantyTickets.route.js`) and kebab-case URLs (`/api/sale-items`, `/api/warranty-tickets`).
- All resources are DB-backed; `Products` was migrated from the old in-memory stub to the `products` table.

## Gotchas

- Model functions `throw`; controllers catch and answer `500`. But update/delete never check `affectedRows`, so an unknown id still answers `200` ("Actualizado"/"Eliminado"). Verify writes with a follow-up `GET`/`SELECT`, never the status code.
- `PUT` is a full-row replace: send every required field each time. Omitted nullable fields become `null`, and DB defaults (`is_active`, `payment_status`, `status`, `stock_quantity`, `min_stock_alert`, `discount_amount`) are applied on update too.
- Foreign keys are `ON DELETE RESTRICT`: deleting a parent with children (e.g. a category with products) throws and answers `500`, not `409`. Delete children first.
- Exact schema quirks: `sale_items.subtottal` (double `t`), enum value `'In Reapir'`, `purchases.users_id`, `warranty_tickets.technician_user_id`. Don't "fix" them in SQL.
- `users` GET deliberately omits `password`; POST/PUT still store it in plain text (no bcrypt, no hashing) and no input validation exists.
- `node_modules/` is tracked in git and there is no `.gitignore` (a past commit claims removal, but the files are still tracked), so `git add -A` produces enormous diffs. Stage only the files you changed.
