const CategoriesRepository = require("../../repositories/inMemory/CategoriesRepository");

class ListCategories {
    static execute() {
        return CategoriesRepository.findAll();
    }
}

module.exports = ListCategories;
