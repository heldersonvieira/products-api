const uuid = require('uuid');

class Product {
    constructor(name, description, price, category) {
        this.id = uuid.v4();
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}

module.exports = Product;
