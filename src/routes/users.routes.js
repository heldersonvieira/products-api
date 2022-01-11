import express from "express";
import { UserController } from "../modules/users/controller/UserController.js";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin.js";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated.js";

const usersRoutes = express.Router();

usersRoutes.use(ensureAuthenticated);

usersRoutes.post('/', ensureAdmin, UserController.create);

usersRoutes.post('/sessions', UserController.authenticate);

usersRoutes.put('/:id', UserController.update);

usersRoutes.get('/', UserController.findByCpf);

export { usersRoutes };
