const db = require("../config/db")

const Categories={}

Categories.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM categories")
        return rows
    } catch (error) {
        throw error
    }
}
Categories.createCategory=async(data)=>{
    try {
        const {category_name,description}=data
        const [rows]= await db.query("INSERT INTO categories (category_name,description) VALUES (?,?)",[category_name,description])
        return rows
    } catch (error) {
        throw error
    }
}
Categories.updateCategory=async(id,data)=>{
    try {
        const {category_name,description}=data
        const [rows]= await db.query("UPDATE categories SET category_name=?,description=? WHERE category_id=?",[category_name,description,id])
        return rows
    } catch (error) {
        throw error
    }
}
Categories.deleteCategory=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM categories WHERE category_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Categories