import { usersRepository } from '../repositories/UsersRepository.js';
import { AuthUser } from '../useCases/AuthUser.js';
import { RefreshToken } from '../useCases/RefreshToken.js';

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
        const res = await usersRepository.update({
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
        const res = await usersRepository.findByCpf({ cpf });

        return response.json(res);
    }

    static async authenticate(request, response) {
        const { cpf, password } = request.body;
        const res = await AuthUser.authenticate({ cpf, password });

        return response.status(res.status).json(res.body);
    }

    static async refreshToken(request, response) {
        const refreshToken =
            request.body.token ||
            request.headers['x-access-token'] ||
            request.query.token;

        const res = await RefreshToken.request(refreshToken);
        return response.json(res);
    }
}

export { UserController };
