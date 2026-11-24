const db = require("../config/db")

const Sales={}

Sales.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM sales")
        return rows
    } catch (error) {
        throw error
    }
}
Sales.createSale=async(data)=>{
    try {
        const {customer_id,users_id,discount_id=null,channel=null,payment_method,payment_status="Completed",total_amount,discount_amount=0.00}=data
        const [rows]= await db.query("INSERT INTO sales (customer_id,users_id,discount_id,channel,payment_method,payment_status,total_amount,discount_amount) VALUES (?,?,?,?,?,?,?,?)",[customer_id,users_id,discount_id,channel,payment_method,payment_status,total_amount,discount_amount])
        return rows
    } catch (error) {
        throw error
    }
}
Sales.updateSale=async(id,data)=>{
    try {
        const {customer_id,users_id,discount_id=null,channel=null,payment_method,payment_status="Completed",total_amount,discount_amount=0.00}=data
        const [rows]= await db.query("UPDATE sales SET customer_id=?,users_id=?,discount_id=?,channel=?,payment_method=?,payment_status=?,total_amount=?,discount_amount=? WHERE sale_id=?",[customer_id,users_id,discount_id,channel,payment_method,payment_status,total_amount,discount_amount,id])
        return rows
    } catch (error) {
        throw error
    }
}
Sales.deleteSale=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM sales WHERE sale_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Sales
