import { client } from '../../../data/client.js';
import { database } from '../../../data/database.js';
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
    constructor() {
        this.repository = database;
    }

    async create(name) {
        try {
            const categoryAlreadyExists = await selectCategoryByName(name);
            if (categoryAlreadyExists) {
                return {
                    status: 204,
                    body: { message: 'Category already exists' },
                };
            }

            const category = new Category({ name });
            // Object.assign(category, { name });

            await this.repository.create(category);

            // await createCategory(category);

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
                return { status: 404, body: { message } };
            }

            return { status: 200, body: { message } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot delete category' } };
        }
    }

    // async findByName(name) {
    //     const category = await selectCategoryByName(name);
    //     return category;
    // }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
