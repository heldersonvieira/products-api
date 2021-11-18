const express = require('express');
const CreateCategoryController = require('../modules/categories/services/createCategory/CreateCategoryController');
const ListCategoriesController = require('../modules/categories/services/listCategories/ListCategoriesController');
const ListCategoryByIdController = require('../modules/categories/services/listCategoryById/ListCategoryByIdController');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', CreateCategoryController.handle);

categoriesRoutes.get('/search/all', ListCategoriesController.handle);

categoriesRoutes.get('/search/:id', ListCategoryByIdController.handle);

module.exports = categoriesRoutes;
