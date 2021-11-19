const CreateCategory = require("./CreateCategory");

class CreateCategoryController {
    static handle(request, response) {
        const { name } = request.body;
        const category = CreateCategory.execute(name);

        return response.status(201).json(category);
    }
}

module.exports = CreateCategoryController;
