const ProductsRepository = require('../../repositories/imMemory/ProductsRepository');

class ListProductById {
    static execute(id) {
        return ProductsRepository.findById(id);
    }
}

module.exports = ListProductById;
