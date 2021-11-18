const express = require('express');
const CreateProductController = require('../modules/products/services/createProduct/CreateProductController');
const DeleteProductController = require('../modules/products/services/deleteProduct/DeleteProductController');
const ListProductByIdController = require('../modules/products/services/listProducts/ListProductByIdController');
const ListProductsController = require('../modules/products/services/listProducts/ListProductsController');
const UpdateProductController = require('../modules/products/services/updateProduct/UpdateProductController');

const productsRoutes = express.Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const listProductByIdController = new ListProductByIdController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productsRoutes.post('/', createProductController.handle);

productsRoutes.get('/search/all', listProductsController.handle);

productsRoutes.get('/search/:id', listProductByIdController.handle);

productsRoutes.put('/:id', updateProductController.handle);

productsRoutes.delete('/:id', deleteProductController.handle);

module.exports = productsRoutes;
