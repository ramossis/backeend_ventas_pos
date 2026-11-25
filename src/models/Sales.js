const db = require("../config/db")

const Sales={}

Sales.create=async(data)=>{
    const {customer_id
        ,user_id,
        discount_id,
        channel,
        payment_method,
        items}=data

        let totalAmout=0
        const itemsToSave=[]
        for(const item of items){
         const [rows]= await db.query('SELECT * FROM products WHERE product_id=?',[item.product_id]) 
            if(rows.length === 0){
                return `Producto ${item.product_id} no encontrado`
            }
            const product=rows[0]
            if (product.stock_quantity < item.quantity){
                return `Sin Stock suficiente para ${product.product_name}`
            }

            const unitPrice= Number(product.unit_price)
            const subTotal = unitPrice * item.quantity

            totalAmout +=  subTotal
             itemsToSave.push({
                product_id:product.product_id,
                quantity: item.quantity,
                unitPrice:unitPrice,
                subTotal
             })

             const [saleResult]= await db.query(`
                INSERT sales (customer_id,user_id,discount_id,channel,
                ,payment_method,payment_status,total_amount,discount_amount)
                VALUES(?,?,?,?,?,"COMPLETED",?,0)
                `,[customer_id,user_id,discount_id,channel,payment_method,totalAmout,])
                const saleId= saleResult.insertId
                for(item of itemsToSave){
                    await db.query(`
                        INSERT sales_items (sale_id, product_id,quantity,unit_price,subTotal) 
                        VALUES (?,?,?,?,?)`,[saleId,item.product_id,item.quantity,item.unit_price,item.subTotal])
                }
                await db.query('UPDATE products SET stock_quantity = stock_quantity -? WHERE product_id = ?',[item.quantity,product_id])

        }

}

module.exports=Sales