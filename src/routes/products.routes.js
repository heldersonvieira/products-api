const express = require('express');
const CreateProductController = require('../modules/products/controller/CreateProductController');
const ListProductsController = require('../modules/products/controller/ListProductsController');

const productsRoutes = express.Router();
const createProductController = new CreateProductController();
const listProductsController = new ListProductsController

productsRoutes.post('/', createProductController.handle);

productsRoutes.get('/search-all', listProductsController.handle);

productsRoutes.get('/search/:id', listProductsController.handle)

module.exports = productsRoutes;
