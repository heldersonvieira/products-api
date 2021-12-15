import { v4 as uuidv4 } from 'uuid';

class Product {
    constructor({ name, description, price, category_id }) {
        this.id = uuidv4(); // cria quando instanciado
        this.name = name;
        this.description = description;
        this.price = price;
        this.category_id = category_id;
        this.created_at = new Date(); // cria quando instanciado
        this.updated_at = new Date(); // cria quando instanciado
    }
}

export { Product };
