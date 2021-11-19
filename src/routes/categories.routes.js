const express = require('express');
const CreateCategoryController = require('../modules/categories/services/createCategory/CreateCategoryController');
const DeleteCategoryController = require('../modules/categories/services/deleteCategory/DeleteCategoryController');
const ListCategoriesController = require('../modules/categories/services/listCategories/ListCategoriesController');
const ListCategoryByIdController = require('../modules/categories/services/listCategoryById/ListCategoryByIdController');
const UpdateCategoryController = require('../modules/categories/services/updateCategory/UpdateCategoryController');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', CreateCategoryController.handle);

categoriesRoutes.get('/search/all', ListCategoriesController.handle);

categoriesRoutes.get('/search/:id', ListCategoryByIdController.handle);

categoriesRoutes.put('/:id', UpdateCategoryController.handle);

categoriesRoutes.delete('/:id', DeleteCategoryController.handle);

module.exports = categoriesRoutes;
