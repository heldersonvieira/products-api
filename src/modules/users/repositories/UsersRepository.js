import { User } from '../model/User.js';
import { database } from '../../../data/database.js';
import { encryptPassword } from '../../../shared/utils/encryptPassword.js';
import { AppError } from '../../../shared/errors/AppError.js';

class UsersRepository {
    constructor() {
        this.repository = database;
    }

    async create({ name, cpf, password, email, is_admin }) {
        try {
            const passwordHash = await encryptPassword(password);
            const user = new User({
                name,
                cpf,
                password: passwordHash,
                email,
                is_admin,
            });
            await this.repository.create(user);

            return { status: 201, body: user };
        } catch (error) {
            throw new AppError('User cannot be created');
        }
    }

    async update({ id, name, cpf, email, is_admin }) {
        const user = this.users.find((user) => user.id === id);
        Object.assign(user, {
            name,
            cpf,
            email,
            is_admin,
        });
        return user;
    }

    async findById({ user_id: id }) {
        return this.repository.findOneById({ id, tableName: 'users' });
    }

    async findByCpf({ cpf }) {
        return this.repository.findByCpf({ cpf });
    }
}

const usersRepository = new UsersRepository();

export { usersRepository };
