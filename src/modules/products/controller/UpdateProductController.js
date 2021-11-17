const UpdateProduct = require('../services/updateProduct/UpdateProduct');

class UpdateProductController {
    handle(request, response) {
        const { id } = request.params;
        const { name, description, price } = request.body;

        const product = UpdateProduct.execute({ id, name, description, price });

        return response.status(201).json(product);
    }
}

module.exports = UpdateProductController;
