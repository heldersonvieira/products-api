const ListProducts = require("../services/ListProducts");

class ListProductsController {
    handle(request, response) {
        const { id } = request.params;
        const products = ListProducts.execute(id);

        return response.json(products)
    }
}

module.exports = ListProductsController;
