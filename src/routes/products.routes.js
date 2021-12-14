import express from 'express';
import { ProductController } from '../modules/products/controller/ProductController.js';

const productsRoutes = express.Router();

productsRoutes.post('/', ProductController.create);

productsRoutes.get('/', ProductController.findAll);

productsRoutes.get('/:id', ProductController.findById);

productsRoutes.put('/:id', ProductController.update);

productsRoutes.delete('/:id', ProductController.delete);

export { productsRoutes };
