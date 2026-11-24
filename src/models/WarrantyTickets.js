const db = require("../config/db")

const WarrantyTickets={}

WarrantyTickets.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM warranty_tickets")
        return rows
    } catch (error) {
        throw error
    }
}
WarrantyTickets.createWarrantyTicket=async(data)=>{
    try {
        const {sale_item_id,technician_user_id,fault_report,resolution=null,status="Open"}=data
        const [rows]= await db.query("INSERT INTO warranty_tickets (sale_item_id,technician_user_id,fault_report,resolution,status) VALUES (?,?,?,?,?)",[sale_item_id,technician_user_id,fault_report,resolution,status])
        return rows
    } catch (error) {
        throw error
    }
}
WarrantyTickets.updateWarrantyTicket=async(id,data)=>{
    try {
        const {sale_item_id,technician_user_id,fault_report,resolution=null,status="Open"}=data
        const [rows]= await db.query("UPDATE warranty_tickets SET sale_item_id=?,technician_user_id=?,fault_report=?,resolution=?,status=? WHERE ticket_id=?",[sale_item_id,technician_user_id,fault_report,resolution,status,id])
        return rows
    } catch (error) {
        throw error
    }
}
WarrantyTickets.deleteWarrantyTicket=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM warranty_tickets WHERE ticket_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=WarrantyTickets
