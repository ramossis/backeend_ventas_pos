const db = require("../config/db")

const SaleItems={}

SaleItems.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM sale_items")
        return rows
    } catch (error) {
        throw error
    }
}
SaleItems.createSaleItem=async(data)=>{
    try {
        const {sale_id,product_id,quantity,unit_price,subtottal,status="Normal"}=data
        const [rows]= await db.query("INSERT INTO sale_items (sale_id,product_id,quantity,unit_price,subtottal,status) VALUES (?,?,?,?,?,?)",[sale_id,product_id,quantity,unit_price,subtottal,status])
        return rows
    } catch (error) {
        throw error
    }
}
SaleItems.updateSaleItem=async(id,data)=>{
    try {
        const {sale_id,product_id,quantity,unit_price,subtottal,status="Normal"}=data
        const [rows]= await db.query("UPDATE sale_items SET sale_id=?,product_id=?,quantity=?,unit_price=?,subtottal=?,status=? WHERE sale_item_id=?",[sale_id,product_id,quantity,unit_price,subtottal,status,id])
        return rows
    } catch (error) {
        throw error
    }
}
SaleItems.deleteSaleItem=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM sale_items WHERE sale_item_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=SaleItems
