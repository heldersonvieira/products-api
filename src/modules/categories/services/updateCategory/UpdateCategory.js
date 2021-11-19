const CategoriesRepository = require('../../repositories/inMemory/CategoriesRepository');

class UpdateCategory {
    static execute(id, name) {
        const category = CategoriesRepository.findById(id);
        category.name = name;

        return category;
    }
}

module.exports = UpdateCategory;
