const UpdateCategory = require('./UpdateCategory');

class UpdateCategoryController {
    static handle(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const category = UpdateCategory.execute(id, name);

        return response.status(201).json(category);
    }
}

module.exports = UpdateCategoryController;
