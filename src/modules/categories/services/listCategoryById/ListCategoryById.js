const CategoriesRepository = require('../../repositories/inMemory/CategoriesRepository');

class ListCategoryById {
    static execute(id) {
        return CategoriesRepository.findById(id);
    }
}

module.exports = ListCategoryById;
