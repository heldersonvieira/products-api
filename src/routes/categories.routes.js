import express from 'express';
import { CategoryController } from '../modules/categories/controller/CategoryController.js';
import { ensureAuthenticated } from '../shared/middlewares/ensureAuthenticated.js';
import { paginate } from '../shared/middlewares/paginate.js';
const categoriesRoutes = express.Router();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.post('/', CategoryController.create);

categoriesRoutes.get('/', paginate('categories'), CategoryController.findAll);

categoriesRoutes.get('/:id', CategoryController.findById);

categoriesRoutes.put('/:id', CategoryController.update);

categoriesRoutes.delete('/:id', CategoryController.delete);

export { categoriesRoutes };
