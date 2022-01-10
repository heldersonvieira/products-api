import express from 'express';
import { categoriesRoutes } from './categories.routes.js';
import { productsRoutes } from './products.routes.js';
import { usersRoutes } from './users.routes.js';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);

export { router };
