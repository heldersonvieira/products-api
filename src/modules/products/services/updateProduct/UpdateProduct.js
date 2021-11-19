const ProductsRepository = require('../../repositories/inMemory/ProductsRepository');

class UpdateProduct {
    static execute({ id, name, description, price }) {
        const product = ProductsRepository.findById(id);
        product.name = name;
        product.description = description;
        product.price = price;

        return product;
    }
}

module.exports = UpdateProduct;
