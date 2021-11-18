const CategoriesRepository = require("../../repositories/inMemory/CategoriesRepository");

class CreateCategory {
    static execute(name) {
        const category = CategoriesRepository.create(name);

        return category;
    }
}

module.exports = CreateCategory;
