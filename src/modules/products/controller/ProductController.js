const ProductsRepository = require('../repositories/inMemory/ProductsRepository');

class ProductController {
    static create(request, response) {
        const { name, description, price, category_name } = request.body;
        const product = ProductsRepository.create({
            name,
            description,
            price,
            category_name,
        });

        return response.status(201).json(product);
    }

    static update(request, response) {
        const { id } = request.params;
        const { name, description, price } = request.body;

        const product = ProductsRepository.update({
            id,
            name,
            description,
            price,
        });

        return response.status(201).json(product);
    }

    static findAll(request, response) {
        const products = ProductsRepository.findAll();
        return response.json(products);
    }

    static findById(request, response) {
        const { id } = request.params;
        const product = ProductsRepository.findById(id);

        return response.json(product);
    }

    static delete(request, response) {
        const { id } = request.params;
        ProductsRepository.delete(id);

        return response.send();
    }
}

module.exports = ProductController;
