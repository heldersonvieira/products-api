const CreateProduct = require("./CreateProduct");

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
}

module.exports = CreateProductController;
