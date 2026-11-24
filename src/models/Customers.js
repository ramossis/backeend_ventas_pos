const db = require("../config/db")

const Customers={}

Customers.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM customers")
        return rows
    } catch (error) {
        throw error
    }
}
Customers.createCustomer=async(data)=>{
    try {
        const {ci_nit,full_name,phone,email=null,address=null}=data
        const [rows]= await db.query("INSERT INTO customers (ci_nit,full_name,phone,email,address) VALUES (?,?,?,?,?)",[ci_nit,full_name,phone,email,address])
        return rows
    } catch (error) {
        throw error
    }
}
Customers.updateCustomer=async(id,data)=>{
    try {
        const {ci_nit,full_name,phone,email=null,address=null}=data
        const [rows]= await db.query("UPDATE customers SET ci_nit=?,full_name=?,phone=?,email=?,address=? WHERE customer_id=?",[ci_nit,full_name,phone,email,address,id])
        return rows
    } catch (error) {
        throw error
    }
}
Customers.deleteCustomer=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM customers WHERE customer_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Customers
