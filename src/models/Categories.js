const db = require("../config/db")

const Categories={}

Categories.getAll=async()=>{
    const [rows]= await db.query("SELECT * FROM categories")
    return rows
}

module.exports=Categories