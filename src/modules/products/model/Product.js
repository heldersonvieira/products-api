const uuid = require('uuid');

class Product {
    constructor(name, description, price, category_id) {
        this.id = uuid.v4();
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category_id;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

module.exports = Product;
