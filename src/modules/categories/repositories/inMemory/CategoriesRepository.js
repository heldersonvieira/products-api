const Category = require('../../model/Category');

class CategoriesRepositoryInMemory {
    constructor() {
        this._categories = [];
    }

    create(name) {
        const category = new Category();
        Object.assign(category, { name });

        this._categories.push(category);

        return category;
    }

    findAll() {
        return this._categories;
    }

    findById(id) {
        return this._categories.find((category) => category.id === id);
    }
}

const CategoriesRepository = new CategoriesRepositoryInMemory();

module.exports = CategoriesRepository;
