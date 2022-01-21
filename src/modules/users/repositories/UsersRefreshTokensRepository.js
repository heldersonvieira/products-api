import { database } from '../../../data/database.js';
import { AppError } from '../../../shared/errors/AppError.js';
import { UsersRefreshTokens } from '../model/UsersRefreshTokens.js';

class UsersRefreshTokensRepository {
    constructor() {
        this.repository = database;
    }

    async create({ refresh_token, user_id, expires_date }) {
        try {
            const userRefreshToken = new UsersRefreshTokens({
                refresh_token,
                user_id,
                expires_date,
            });

            await this.repository.create(userRefreshToken);

            return { status: 201, body: userRefreshToken };
        } catch (error) {
            throw new AppError('Refresh token cannot be created');
        }
    }

    async findByUserIdAndRefreshToken({ user_id, refreshToken }) {
        return await this.repository.findByUserIdAndRefreshToken({
            user_id,
            refreshToken,
            tableName: 'users_refresh_tokens',
        });
    }

    async delete(id) {
        return await this.repository.delete({
            id,
            tableName: 'users_refresh_tokens',
        });
    }
}

const usersRefreshTokensRepository = new UsersRefreshTokensRepository();

export { usersRefreshTokensRepository };
