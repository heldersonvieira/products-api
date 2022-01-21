import pkg from 'jsonwebtoken';
const { verify, sign } = pkg;
import auth from '../../../config/auth.js';
import { AppError } from '../../../shared/errors/AppError.js';
import { DateProvider } from '../../../shared/provider/DateProvider.js';
import { usersRefreshTokensRepository } from '../repositories/UsersRefreshTokensRepository.js';

class RefreshToken {
    static async request(refreshToken) {
        const {
            expiresInRefreshToken,
            expiresResfreshTokenDays,
            secretRefreshToken,
            secretToken,
            expiresInToken,
        } = auth;

        const { email, sub: user_id } = verify(refreshToken, auth.secretRefreshToken);
        const userToken =
            await usersRefreshTokensRepository.findByUserIdAndRefreshToken({ user_id, refreshToken});

        if (!userToken) {
            throw new AppError('Refresh token error');
        }

        await usersRefreshTokensRepository.delete(userToken.id);

        // gerar refresh token
        const refreshTokenExpiresDate = DateProvider.addDays(
            expiresResfreshTokenDays
        );

        const newRefreshToken = sign({ email }, secretRefreshToken, {
            subject: user_id,
            expiresIn: expiresInRefreshToken,
        });

        await usersRefreshTokensRepository.create({
            refresh_token: refreshToken,
            user_id,
            expires_date: refreshTokenExpiresDate,
        });

        // gerar token
        const newToken = sign({}, secretToken, {
            subject: user_id,
            expiresIn: expiresInToken,
        });

        return {
            token: newToken,
            newRefreshToken,
        };
    }
}

export { RefreshToken };
