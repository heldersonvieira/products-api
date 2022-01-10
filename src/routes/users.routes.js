import express from "express";
import { UserController } from "../modules/users/controller/UserController.js";

const usersRoutes = express.Router();

usersRoutes.post('/', UserController.create);

usersRoutes.post('/sessions', UserController.authenticate);

usersRoutes.put('/:id', UserController.update);

usersRoutes.get('/', UserController.findByCpf);

export { usersRoutes };
