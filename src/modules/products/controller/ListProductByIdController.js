const ListProductById = require("../services/listProducts/ListProductById");

class ListProductByIdController {
    handle(request, response) {
        const { id } = request.params;
        const product = ListProductById.execute(id);
        
        return response.json(product);
    }
}

module.exports = ListProductByIdController;