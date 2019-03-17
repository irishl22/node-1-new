const products = require('../products.json')


module.exports = {
    getProductId: (req, res) => {  
        const { id } = req.params
        const product = products.filter(item => item.id == id)  
        if(!product[0]) {
            res.status(500).send("not in list")
        } else{
    
            res.status(200).send(product)
        }
    }
    
}