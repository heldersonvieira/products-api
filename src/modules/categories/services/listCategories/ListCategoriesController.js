const ListCategories = require("./ListCategories");

class ListCategoriesController {
    static handle(request, response) {
        const categories = ListCategories.execute();
        return response.json(categories);
    }
}

module.exports = ListCategoriesController;
