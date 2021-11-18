const ProductsRepository = require('../../repositories/inMemory/ProductsRepository');

class DeleteProduct {
    static execute(id) {
        ProductsRepository.delete(id);
    }
}

module.exports = DeleteProduct;
