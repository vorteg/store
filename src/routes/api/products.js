
const express = require("express");
const router = express.Router();


// Controllers
const { getApiProducts, createApiProduct } = require('../../scripts/db/products.orm');

// Routes
    function productsApi (app){
        app.use('/api/products', router);
        router.post('/', createApiProduct);
        router.get('/', getApiProducts);
    }


    module.exports = productsApi