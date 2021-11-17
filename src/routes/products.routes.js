const express = require('express');
const CreateProductController = require('../modules/products/controller/CreateProductController');
const ListProductByIdController = require('../modules/products/controller/ListProductByIdController');
const ListProductsController = require('../modules/products/controller/ListProductsController');
const UpdateProductController = require('../modules/products/controller/UpdateProductController');

const productsRoutes = express.Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const listProductByIdController = new ListProductByIdController();
const updateProductController = new UpdateProductController();

productsRoutes.post('/', createProductController.handle);

productsRoutes.get('/search/all', listProductsController.handle);

productsRoutes.get('/search/:id', listProductByIdController.handle);

productsRoutes.put('/:id', updateProductController.handle);

module.exports = productsRoutes;
