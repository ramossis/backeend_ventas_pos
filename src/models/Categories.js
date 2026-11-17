const db = require("../config/db")

const Categories={}

Categories.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM categories")
        return rows
    } catch (error) {
        return error
    }
}
Categories.createCategory=async(data)=>{
    try {
        const {category_name,description}=data
        const [rows]= await db.query("INSERT INTO categories (category_name,description) VALUES (?,?)",[category_name,description])
        return rows
    } catch (error) {
        return error
    }
}
module.exports=Categories