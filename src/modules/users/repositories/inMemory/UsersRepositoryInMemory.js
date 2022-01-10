import { User } from '../../model/User.js';
import { encryptPassword } from '../../../../shared/utils/encryptPassword.js';

class UsersRepositoryInMemory {
    constructor() {
        this.users = [];
    }

    async create({ name, cpf, password, email, isAdmin }) {
        const user = new User({
            name,
            cpf,
            password: await encryptPassword(password),
            email,
            isAdmin,
        });

        this.users.push(user);

        return user;
    }

    async update({ id, name, cpf, email, isAdmin }) {
        const user = this.users.find((user) => user.id === id);
        Object.assign(user, {
            name,
            cpf,
            email,
            isAdmin,
        });
        return user;
    }

    async findByCpf({ cpf }) {
        const user = this.users.find((user) => user.cpf === String(cpf));

        return user;
    }
}

const usersRespositoryInMemory = new UsersRepositoryInMemory();

export { usersRespositoryInMemory };
