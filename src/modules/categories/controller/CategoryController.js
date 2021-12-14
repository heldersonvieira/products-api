import { categoriesRepository } from '../repositories/CategoriesRepository.js';

class CategoryController {
    static async create(request, response) {
        const { name } = request.body;
        
        const res = await categoriesRepository.create(name);
        return response.status(res.status).json(res.body);
    }

    static async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const res = await categoriesRepository.update({ id, name });
        return response.status(res.status).json(res.body);
    }

    static async findAll(request, response) {
        const res = await categoriesRepository.findAll();
        return response.status(res.status).json(res.body);
    }

    static async findById(request, response) {
        const { id } = request.params;
        const res = await categoriesRepository.findById(id);
        return response.status(res.status).json(res.body);
    }

    static async delete(request, response) {
        const { id } = request.params;
        const res = await categoriesRepository.delete(id);
        return response.status(res.status).json(res.body);
    }
}

export { CategoryController };
