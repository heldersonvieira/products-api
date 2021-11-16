const ProductsRepository = require('../../repositories/imMemory/ProductsRepository');

class ListProducts {
    static execute() {
        const products = ProductsRepository.findAll();

        return products;
    }
}

module.exports = ListProducts;
