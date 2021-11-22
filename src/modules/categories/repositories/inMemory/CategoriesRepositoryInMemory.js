const Category = require('../../model/Category');

class CategoriesRepositoryInMemory {
    constructor() {
        this._categories = [];
    }

    async create(name) {
        const category = new Category();
        Object.assign(category, { name });

        this._categories.push(category);
        return category;
    }

    async findAll() {
        return this._categories;
    }

    findById(id) {
        return this._categories.find((category) => category.id === id);
    }

    update(id, name) {
        const category = this.findById(id);
        category.name = name;
        return category;
    }

    delete(id) {
        const category = this.findById(id);
        if (category.id === id) {
            const indexCategory = this._categories.indexOf(
                this.findById(id)
            );

            this._categories.splice(indexCategory, 1);
        }
    }
}

const categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();

module.exports = categoriesRepositoryInMemory;
