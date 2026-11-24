const db = require("../config/db")

const Products={}

Products.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM products")
        return rows
    } catch (error) {
        throw error
    }
}
Products.createProduct=async(data)=>{
    try {
        const {category_id,barcode=null,product_name,description=null,unit_price,unit_cost,stock_quantity=0,min_stock_alert=5}=data
        const [rows]= await db.query("INSERT INTO products (category_id,barcode,product_name,description,unit_price,unit_cost,stock_quantity,min_stock_alert) VALUES (?,?,?,?,?,?,?,?)",[category_id,barcode,product_name,description,unit_price,unit_cost,stock_quantity,min_stock_alert])
        return rows
    } catch (error) {
        throw error
    }
}
Products.updateProduct=async(id,data)=>{
    try {
        const {category_id,barcode=null,product_name,description=null,unit_price,unit_cost,stock_quantity=0,min_stock_alert=5}=data
        const [rows]= await db.query("UPDATE products SET category_id=?,barcode=?,product_name=?,description=?,unit_price=?,unit_cost=?,stock_quantity=?,min_stock_alert=? WHERE product_id=?",[category_id,barcode,product_name,description,unit_price,unit_cost,stock_quantity,min_stock_alert,id])
        return rows
    } catch (error) {
        throw error
    }
}
Products.deleteProduct=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM products WHERE product_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Products
