
const express = require("express");


// Controllers
import { getApiProducts, createApiProduct } from '../../scripts/db/products.orm';

// Routes
var productsApi = function (app){
    const router = express.Router();
    app.use('/api/products', router);
    router.post('/', createApiProduct);
    router.get('/', getApiProducts);
    }


    module.exports = {productsApi}