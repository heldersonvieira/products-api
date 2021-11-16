const ProductsRepository = require('../repositories/ProductsRepository');

class CreateProduct {
    static execute({ name, description, price, category_name }) {

        const product = ProductsRepository.create({
            name,
            description,
            price,
            category_name
        });

        return product;
    }
}

module.exports = CreateProduct;
