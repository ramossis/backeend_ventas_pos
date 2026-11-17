require('dotenv').config()
const express=require('express')

const app=express()

app.use("/api/products",require("./src/routes/product.route"))
app.use("/api/categories",require("./src/routes/categories.route"))

app.listen(process.env.PORT,()=>{
    console.log(`SERVER ON READY IN PORT ${process.env.PORT}`)
    console.log("Hola MUndo")
})