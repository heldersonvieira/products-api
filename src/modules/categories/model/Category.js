import { v4 as uuidv4 } from 'uuid';

class Category {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.created_at = new Date();
    }
}

export { Category };
