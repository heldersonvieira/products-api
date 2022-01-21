import { User } from '../../model/User.js';
import { encryptPassword } from '../../../../shared/utils/encryptPassword.js';

class UsersRepositoryInMemory {
    constructor() {
        this.users = [];
    }

    async create({ name, cpf, password, email, is_admin }) {
        const user = new User({
            name,
            cpf,
            password: await encryptPassword(password),
            email,
            is_admin,
        });

        this.users.push(user);

        return user;
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

    async findByCpf({ cpf }) {
        console.log(cpf);
        const user = this.users.find((user) => user.cpf === String(cpf));
        return user;
    }
}

const usersRespositoryInMemory = new UsersRepositoryInMemory();

export { usersRespositoryInMemory };
