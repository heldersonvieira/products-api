import { v4 as uuidv4 } from 'uuid';

class User {
    constructor({ cpf, name, password, email, is_admin = false }) {
        this.id = uuidv4();
        this.cpf = cpf;
        this.name = name;
        this.password = password;
        this.email = email;
        this.is_admin = is_admin;
        this.created_at = new Date();
    }
}

export { User };
