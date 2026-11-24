const db = require("../config/db")

const Suppliers={}

Suppliers.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM suppliers")
        return rows
    } catch (error) {
        throw error
    }
}
Suppliers.createSupplier=async(data)=>{
    try {
        const {supplier_name,contact_person=null,phone=null,email=null,address=null}=data
        const [rows]= await db.query("INSERT INTO suppliers (supplier_name,contact_person,phone,email,address) VALUES (?,?,?,?,?)",[supplier_name,contact_person,phone,email,address])
        return rows
    } catch (error) {
        throw error
    }
}
Suppliers.updateSupplier=async(id,data)=>{
    try {
        const {supplier_name,contact_person=null,phone=null,email=null,address=null}=data
        const [rows]= await db.query("UPDATE suppliers SET supplier_name=?,contact_person=?,phone=?,email=?,address=? WHERE supplier_id=?",[supplier_name,contact_person,phone,email,address,id])
        return rows
    } catch (error) {
        throw error
    }
}
Suppliers.deleteSupplier=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM suppliers WHERE supplier_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Suppliers
