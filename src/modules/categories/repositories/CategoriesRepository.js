import {
    createCategory,
    selectAll,
    selectById,
    updateCategory,
    deleteCategory,
    selectCategoryByName,
} from '../infra/queries/index.js';
import { Category } from '../model/Category.js';

class CategoriesRepository {
    async create(name) {
        const categoryAlreadyExists = await this.findByName(name);

        if (categoryAlreadyExists) {
            return {
                message: 'Category already exists',
            };
        }

        const category = new Category();
        Object.assign(category, { name });

        await createCategory(category);

        return category;
    }

    async update({ id, name }) {
        await updateCategory({ id, name });
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
        let message = 'Deleted category';
        const categoryStillExists = await deleteCategory(id);

        if (!categoryStillExists) {
            message = 'Category does not exists';
        }

        return { message };
    }

    async findByName(name) {
        const category = await selectCategoryByName(name);
        return category;
    }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
