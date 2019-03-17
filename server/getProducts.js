const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => res.status(200).send(products),
    
    getProductsByPrice: (req, res) => {
        const {price} = req.query
        if(price) {
            console.log(req.query.price)
            const prices = products.filter( item => 
            item.price >= price * 1);
            return res.status(200).send(prices)    
        } 
        
        res.status(200).send(products)    
        
    }

}
