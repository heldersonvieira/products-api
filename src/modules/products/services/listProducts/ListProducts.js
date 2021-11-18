const ProductsRepository = require('../../repositories/inMemory/ProductsRepository');

class ListProducts {
    static execute() {
        const products = ProductsRepository.findAll();

        return products;
    }
}

module.exports = ListProducts;
