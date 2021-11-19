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

const CategoriesRepository = new CategoriesRepositoryInMemory();

module.exports = CategoriesRepository;
