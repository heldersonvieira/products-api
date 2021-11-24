import { productsRepository } from '../repositories/ProductsRepository.js';

class ProductController {
    static async create(request, response) {
        const { name, description, price, category_name } = request.body;
        const product = await productsRepository.create({
            name,
            description,
            price,
            category_name,
        });
        return response.status(201).json(product);
    }

    static async update(request, response) {
        const { id } = request.params;
        const { name, description, price } = request.body;

        const product = await productsRepository.update({
            id,
            name,
            description,
            price,
        });

        return response.status(201).json(product);
    }

    static async findAll(request, response) {
        const products = await productsRepository.findAll();
        return response.json(products);
    }

    static async findById(request, response) {
        const { id } = request.params;
        const product = await productsRepository.findById(id);

        return response.json(product);
    }

    static async delete(request, response) {
        const { id } = request.params;
        const message = await productsRepository.delete(id);

        return response.send(message);
    }
}

export { ProductController };
