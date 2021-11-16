const Category = require('../../../categories/model/Category');
const Product = require('../../model/Product');

class ProductsRepositoryInMemory {
    constructor() {
        this.products = [];
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

    findAll() {
        return this.products;
    }

    findById(id) {
        return this.products.find((product) => product.id === id);
    }
}

const ProductsRepository = new ProductsRepositoryInMemory();

module.exports = ProductsRepository;
