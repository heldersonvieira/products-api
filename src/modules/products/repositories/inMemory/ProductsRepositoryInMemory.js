import { Category } from '../../../categories/model/Category.js';
import { Product } from '../../model/Product.js';

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

    update({ id, name, description, price }) {
        const product = ProductsRepository.findById(id);
        product.name = name;
        product.description = description;
        product.price = price;

        return product;
    }

    findAll() {
        return this.products;
    }

    findById(id) {
        return this.products.find((product) => product.id === id);
    }

    delete(id) {
        const product = this.findById(id);

        if (product.id === id) {
            const indexProduct = this.products.indexOf(this.findById(id));

            this.products.splice(indexProduct, 1);
        }
    }
}

const productsRepositoryInMemory = new ProductsRepositoryInMemory();

export { productsRepositoryInMemory };
