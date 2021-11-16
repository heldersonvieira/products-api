const CreateProduct = require("../services/CreateProduct");

class CreateProductController {
    handle(request, response) {
        const { name, description, price, category_name } = request.body;

        const product = CreateProduct.execute({
            name,
            description,
            price,
            category_name
        });

        return response.status(201).json(product);
    }

    // gllProducts(request, response) {
    //     const products = productsRepository.get();
    //     return response.json(products);
    // }
}

module.exports = CreateProductController;
