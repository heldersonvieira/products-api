const ListCategoryById = require('./ListCategoryById');

class ListCategoryByIdController {
    static handle(request, response) {
        const { id } = request.params;
        const category = ListCategoryById.execute(id);

        return response.json(category);
    }
}

module.exports = ListCategoryByIdController;
