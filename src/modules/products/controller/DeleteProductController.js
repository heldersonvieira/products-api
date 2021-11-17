const DeleteProduct = require("../services/deleteProduct/DeleteProduct");

class DeleteProductController {
    handle(request, response) {
        const { id } = request.body;
        DeleteProduct.execute(id);

        return response.send();
    }
}

module.exports = DeleteProductController;
