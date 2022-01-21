import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken';
import auth from '../../../config/auth.js';
import { AppError } from '../../../shared/errors/AppError.js';
import { DateProvider } from '../../../shared/provider/DateProvider.js';
import { usersRefreshTokensRepository } from '../repositories/UsersRefreshTokensRepository.js';
const { sign } = pkg;
import { usersRepository } from '../repositories/UsersRepository.js';

class AuthUser {
    static async authenticate(login) {
        const { cpf, password } = login;
        const {
            secretToken,
            secretRefreshToken,
            expiresInToken,
            expiresInRefreshToken,
            expiresResfreshTokenDays,
        } = auth;
        // verificar se o usuário existe
        const user = await usersRepository.findByCpf({ cpf });
        if (!user) {
            throw new AppError('User does not exists');
        }
        // verificar se a senha esta correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return {
                status: 400,
                body: { message: 'User or Password incorrect' },
            };
        }
        // gerar token
        const token = sign({}, secretToken, {
            subject: user.id,
            expiresIn: expiresInToken,
        });

        // gerar refresh token
        const refreshTokenExpiresDate = DateProvider.addDays(
            expiresResfreshTokenDays
        );
        
        const refresh_token = sign({ email: user.email }, secretRefreshToken, {
            subject: user.id,
            expiresIn: expiresInRefreshToken,
        });

        await usersRefreshTokensRepository.create({
            refresh_token,
            user_id: user.id,
            expires_date: refreshTokenExpiresDate,
        });

        const tokenReturn = {
            user: {
                name: user.name,
                cpf: user.cpf,
                email: user.email,
            },
            token,
            refresh_token,
        };

        return {
            status: 201,
            body: tokenReturn,
        };
    }
}

export { AuthUser };
