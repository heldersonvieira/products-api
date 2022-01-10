import pkg from 'jsonwebtoken';
import { usersRepository } from '../../modules/users/repositories/UsersRepository.js';
import { AppError } from '../errors/AppError.js';
const { verify } = pkg;

export const ensureAuthenticated = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    const [, token] = authHeader.split(' ');
    if (!token) {
        throw new AppError('Token missing');
    }
    
    try {
        const { sub: user_id } = verify(
            token,
            '29914c0bae531750646ca80bdd48a693'
        );

        const user = await usersRepository.findById({ user_id });
        if (!user)
            throw new AppError('User does not exists')

        next();
    } catch (error) {
        throw new AppError('Invalid token');
    }
};
