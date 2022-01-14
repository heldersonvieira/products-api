import pkg from 'jsonwebtoken';
import auth from '../../config/auth.js';
import { usersRepository } from '../../modules/users/repositories/UsersRepository.js';
import { AppError } from '../errors/AppError.js';
const { verify } = pkg;

export const ensureAuthenticated = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) throw new AppError('Token missing');

    const [, token] = authHeader.split(' ');
    
    try {
        const { sub: user_id } = verify(token, auth.secretToken);

        const user = await usersRepository.findById({ user_id });
        if (!user) throw new AppError('User does not exists')

        request.user = user;

        next();
    } catch (error) {
        throw new AppError('Invalid token');
    }
};
