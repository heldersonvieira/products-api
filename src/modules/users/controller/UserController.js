import { usersRespositoryInMemory } from '../repositories/inMemory/UsersRepositoryInMemory.js';
import { usersRepository } from '../repositories/UsersRepository.js';
import { AuthenticationUser } from '../useCases/AuthenticationUser.js';

class UserController {
    static async create(request, response) {
        const { name, cpf, password, email, is_admin, avatar } = request.body;
        const res = await usersRepository.create({
            name,
            cpf,
            password,
            email,
            avatar,
            is_admin,
        });

        return response.status(res.status).json(res.body);
    }

    static async update(request, response) {
        const { id } = request.params;
        const { name, cpf, email, is_admin } = request.body;
        const res = await usersRespositoryInMemory.update({
            id,
            name,
            cpf,
            email,
            is_admin,
        });

        return response.status(201).json(res);
    }

    static async findByCpf(request, response) {
        const { cpf } = request.body;
        const res = await usersRespositoryInMemory.findByCpf({ cpf });

        return response.json(res);
    }

    static async authenticate(request, response) {
        const { cpf, password } = request.body;
        const res = await AuthenticationUser.authenticate({ cpf, password });

        return response.status(res.status).json(res.body);
    }
}

export { UserController };
