import express from 'express';
import { UserController } from '../modules/users/controller/UserController.js';
import { ensureAdmin } from '../shared/middlewares/ensureAdmin.js';
import { ensureAuthenticated } from '../shared/middlewares/ensureAuthenticated.js';

const usersRoutes = express.Router();

usersRoutes.post('/', ensureAuthenticated, ensureAdmin, UserController.create);

usersRoutes.post('/sessions', UserController.authenticate);

usersRoutes.put(
    '/:id',
    ensureAdmin,
    ensureAuthenticated,
    UserController.update
);

usersRoutes.get('/', ensureAuthenticated, UserController.findByCpf);

usersRoutes.post('/refresh-token', UserController.refreshToken);

export { usersRoutes };
