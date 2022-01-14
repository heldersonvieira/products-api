import { v4 as uuidv4 } from 'uuid';
import { DateProvider } from '../../../shared/provider/DateProvider.js';

class UsersRefreshTokens {
    constructor({ refresh_token, user_id, expires_date }) {
        this.id = uuidv4();
        this.refresh_token = refresh_token;
        this.user_id = user_id;
        this.expires_date = expires_date;
        this.created_at = DateProvider.dateNow();
    }
}

export { UsersRefreshTokens };
