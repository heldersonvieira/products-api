import { usersRepository } from '../../modules/users/repositories/UsersRepository.js';
import { AppError } from '../errors/AppError.js';

export const ensureAdmin = async (request, response, next) => {
    const { id: user_id } = request.user;
    const user = await usersRepository.findById({ user_id });

    if (!user.is_admin) {
        throw new AppError('User is not admin');
    }

    return next();
};
