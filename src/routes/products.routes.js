const express = require('express');
const ProductController = require('../modules/products/controller/ProductController');

const productsRoutes = express.Router();

productsRoutes.post('/', ProductController.create);

productsRoutes.get('/search/all', ProductController.findAll);

productsRoutes.get('/search/:id', ProductController.findById);

productsRoutes.put('/:id', ProductController.update);

productsRoutes.delete('/:id', ProductController.delete);

module.exports = productsRoutes;
