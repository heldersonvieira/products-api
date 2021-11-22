const CategoriesRepository = require('../repositories/inMemory/CategoriesRepository');

class CategoryController {
    static create(request, response) {
        const { name } = request.body;
        const category = CategoriesRepository.create(name);
        return response.status(201).json(category);
    }

    static update(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const category = CategoriesRepository.update(id, name);
        return response.status(201).json(category);
    }

    static findAll(request, response) {
        const categories = CategoriesRepository.findAll();
        return response.json(categories);
    }

    static findById(request, response) {
        const { id } = request.params;
        const category = CategoriesRepository.findById(id);
        return response.json(category);
    }

    static delete(request, response) {
        const { id } = request.params;
        CategoriesRepository.delete(id);
        return response.send();
    }
}

module.exports = CategoryController;
