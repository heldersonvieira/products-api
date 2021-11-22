const {
    create,
    selectAll,
    selectById,
    update,
    deleteCategory,
} = require('../../../database/queries/selects');
const Category = require('../model/Category');

class CategoriesRepository {
    async create(name) {
        const category = new Category();
        Object.assign(category, { name });

        await create(category);

        return category;
    }

    async update({ id, name }) {
        await update({ id, name });
        return {
            message: 'Updated category',
        };
    }

    async findAll() {
        return await selectAll('categories');
    }

    async findById(id) {
        const category = await selectById(id, 'categories');
        return category;
    }

    async delete(id) {
        await deleteCategory(id);
        return {
            message: 'Deleted category',
        };
    }
}

const categoriesRepository = new CategoriesRepository();

module.exports = categoriesRepository;
