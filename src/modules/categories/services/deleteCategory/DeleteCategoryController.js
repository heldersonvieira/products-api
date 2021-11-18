const DeleteCategory = require("./DeleteCategory");

class DeleteCategoryController {
    static handle(request, response) {
        const { id } = request.params;
        DeleteCategory.execute(id);

        return response.send();
    }
}

module.exports = DeleteCategoryController;
