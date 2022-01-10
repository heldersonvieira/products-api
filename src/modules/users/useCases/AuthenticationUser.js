import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken';
import { AppError } from '../../../shared/errors/AppError.js';
const { sign } = pkg;
import { usersRepository } from '../repositories/UsersRepository.js';

class AuthenticationUser {
    static async authenticate(login) {
        const { cpf, password } = login;
        // usuario existe?
        const user = await usersRepository.findByCpf({ cpf });
        if (!user) {
            throw new AppError('Usuário não existe');
            // return {
            //     status: 400,
            //     body: { message: 'User does not exists' },
            // };
        }
        // senha esta correta?
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return {
                status: 400,
                body: { message: 'User or Password incorrect' },
            };
        }
        // gerar jsonwebtoken
        const token = sign({}, '29914c0bae531750646ca80bdd48a693', {
            subject: user.id,
            expiresIn: '1d',
        });

        const tokenReturn = {
            user: {
                name: user.name,
                cpf: user.cpf,
                email: user.email,
            },
            token,
        };

        return {
            status: 201,
            body: {
                tokenReturn,
            }
        };
    }
}

export { AuthenticationUser };
