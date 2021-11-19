const ProductsRepository = require('../../repositories/inMemory/ProductsRepository');

class ListProductById {
    static execute(id) {
        return ProductsRepository.findById(id);
    }
}

module.exports = ListProductById;
