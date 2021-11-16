const Category = require('../../categories/model/Category');
const Product = require('../model/Product');

class ProductsRepository {
    constructor() {
        this.products = [];
    }

    get() {
        return this.products;
    }

    create({ name, description, price, category_name }) {
        const product = new Product();

        Object.assign(product, {
            name,
            description,
            price,
            category: new Category(category_name),
        });

        this.products.push(product);

        return product;
    }
}

module.exports = ProductsRepository;
