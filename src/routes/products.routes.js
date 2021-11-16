const express = require('express');
const ProductsController = require('../modules/products/controller/ProductsController');

const productsRoutes = express.Router();
const productsController = new ProductsController();


productsRoutes.post('/', productsController.create);

productsRoutes.get('/', productsController.gllProducts);


module.exports = productsRoutes;
