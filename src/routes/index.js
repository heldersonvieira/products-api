import express from 'express';
import { categoriesRoutes } from './categories.routes.js';
import { productsRoutes } from './products.routes.js';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

export { router };
