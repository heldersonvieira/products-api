import express from 'express';
import { CategoryController } from '../modules/categories/controller/CategoryController.js';

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', CategoryController.create);

categoriesRoutes.get('/search/all', CategoryController.findAll);

categoriesRoutes.get('/search/:id', CategoryController.findById);

categoriesRoutes.put('/:id', CategoryController.update);

categoriesRoutes.delete('/:id', CategoryController.delete);

export { categoriesRoutes };
