import { v4 as uuidv4 } from 'uuid';

class User {
    constructor({ cpf, name, password, email, isAdmin = false }) {
        this.id = uuidv4();
        this.cpf = cpf;
        this.name = name;
        this.password = password;
        this.email = email;
        this.isAdmin = isAdmin;
        this.created_at = new Date();
    }
}

export { User };
