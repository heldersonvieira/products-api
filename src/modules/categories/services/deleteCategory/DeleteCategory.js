const CategoriesRepository = require("../../repositories/inMemory/CategoriesRepository");

class DeleteCategory {
    static execute(id) {
        CategoriesRepository.delete(id);
    }
}

module.exports = DeleteCategory;
