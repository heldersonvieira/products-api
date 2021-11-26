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
        try {
            const categoryAlreadyExists = await selectCategoryByName(name);
            if (categoryAlreadyExists) {
                return {
                    status: 200,
                    body: { message: 'Category already exists' },
                };
            }

            const category = new Category();
            Object.assign(category, { name });

            await createCategory(category);

            return { status: 201, body: category };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot create category' } };
        }
    }

    async update({ id, name }) {
        try {
            await updateCategory({ id, name });
            return { status: 201, body: { message: 'Updated category' } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot update category' } };
        }
    }

    async findAll() {
        try {
            const categories = await selectAll('categories');
            return { status: 200, body: categories };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot list categories' } };
        }
    }

    async findById(id) {
        try {
            const category = await selectById(id, 'categories');
            return { status: 200, body: category };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot list category' } };
        }
    }

    async delete(id) {
        try {
            let message = 'Deleted category';
            const categoryStillExists = await deleteCategory(id);

            if (!categoryStillExists) {
                message = 'Category does not exists';
            }

            return { status: 200, body: { message } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot delete category' } };
        }
    }

    async findByName(name) {
        try {
            const category = await selectCategoryByName(name);
            return category;
        } catch (error) {
            return { err: 'Cannot find category' };
        }
    }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
