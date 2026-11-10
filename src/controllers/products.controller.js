const Products=require('../models/Products')
const getAllProduct=(req,res)=>{
    try {
        const pr=Products.getAllItems()
        return res.status(200).json(pr)
    } catch (error) {
        return res.status(505).json(error)
    }
}
module.exports={getAllProduct}