const ProductsRepository = require('../repositories/ProductsRepository');

const productsRepository = new ProductsRepository();

class ProductsController {
    create(request, response) {
        const { name, description, price, category_name } = request.body;

        const product = productsRepository.create({
            name,
            description,
            price,
            category_name,
        });

        return response.status(201).json(product);
    }

    gllProducts(request, response) {
        const products = productsRepository.get();
        return response.json(products);
    }
}

module.exports = ProductsController;
