const ProductsRepository = require('../repositories/ProductsRepository');

// const productsRepository = ProductsRepository.getInstance();

class ListProducts {
    static execute(id = '') {
        if (id) {
            return ProductsRepository.findById(id);
        }

        const products = ProductsRepository.findAll();

        return products;
    }
}

module.exports = ListProducts;
