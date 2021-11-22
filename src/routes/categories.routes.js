const express = require('express');
const CategoryController = require('../modules/categories/controller/CategoryController');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', CategoryController.create);

categoriesRoutes.get('/search/all', CategoryController.findAll);

categoriesRoutes.get('/search/:id', CategoryController.findById);

categoriesRoutes.put('/:id', CategoryController.update);

categoriesRoutes.delete('/:id', CategoryController.delete);

module.exports = categoriesRoutes;
