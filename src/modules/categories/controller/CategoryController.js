import { categoriesRepository } from '../repositories/CategoriesRepository.js';

class CategoryController {
    static async create(request, response) {
        const { name } = request.body;
        const category = await categoriesRepository.create(name);
        return response.status(201).json(category);
    }

    static async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const message = await categoriesRepository.update({ id, name });
        return response.status(201).json(message);
    }

    static async findAll(request, response) {
        const categories = await categoriesRepository.findAll();
        return response.json(categories);
    }

    static async findById(request, response) {
        const { id } = request.params;
        const category = await categoriesRepository.findById(id);
        return response.json(category);
    }

    static async delete(request, response) {
        const { id } = request.params;
        const message = await categoriesRepository.delete(id);
        return response.json(message);
    }
}

export { CategoryController };
