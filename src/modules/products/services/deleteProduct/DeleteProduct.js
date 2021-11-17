const ProductsRepository = require('../../repositories/imMemory/ProductsRepository');

class DeleteProduct {
    static execute(id) {
        ProductsRepository.delete(id);
    }
}

module.exports = DeleteProduct;
