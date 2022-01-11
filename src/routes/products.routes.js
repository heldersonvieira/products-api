import express from 'express';
import { ProductController } from '../modules/products/controller/ProductController.js';
import { ensureAdmin } from '../shared/middlewares/ensureAdmin.js';
import { ensureAuthenticated } from '../shared/middlewares/ensureAuthenticated.js';
import { paginate } from '../shared/middlewares/paginate.js';

const productsRoutes = express.Router();

productsRoutes.use(ensureAuthenticated);

productsRoutes.post('/', ProductController.create);

productsRoutes.get('/', paginate('products'), ProductController.findAll);

productsRoutes.get('/:id', ProductController.findById);

productsRoutes.put('/:id', ProductController.update);

productsRoutes.delete('/:id', ensureAdmin, ProductController.delete);

export { productsRoutes };
