const ListProducts = require("../services/listProducts/ListProducts");

class ListProductsController {
    handle(request, response) {
        const products = ListProducts.execute();

        return response.json(products)
    }
}

module.exports = ListProductsController;
