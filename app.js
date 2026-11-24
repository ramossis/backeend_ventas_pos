require('dotenv').config()
const express=require('express')

const app=express()

app.use(express.json())

app.use("/api/products",require("./src/routes/product.route"))
app.use("/api/categories",require("./src/routes/categories.route"))
app.use("/api/customers",require("./src/routes/customers.route"))
app.use("/api/suppliers",require("./src/routes/suppliers.route"))
app.use("/api/roles",require("./src/routes/roles.route"))
app.use("/api/users",require("./src/routes/users.route"))
app.use("/api/discounts",require("./src/routes/discounts.route"))
app.use("/api/sales",require("./src/routes/sales.route"))
app.use("/api/sale-items",require("./src/routes/saleItems.route"))
app.use("/api/purchases",require("./src/routes/purchases.route"))
app.use("/api/warranty-tickets",require("./src/routes/warrantyTickets.route"))

app.listen(process.env.PORT,()=>{
    console.log(`SERVER ON READY IN PORT ${process.env.PORT}`)
    console.log("Hola MUndo")
})