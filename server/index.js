const express = require('express')
const app = express()

const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get('/api/products', getProducts.getProducts);
app.get('/api/product/:id', getProduct.getProductId);
app.get('/api/products/byPrice', getProducts.getProductsByPrice);






const PORT = 6140
app.listen(PORT, () => console.log(`listening on ${PORT}`))