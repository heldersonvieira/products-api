import { database } from '../../../data/database.js';
import { Category } from '../model/Category.js';

class CategoriesRepository {
    constructor() {
        this.repository = database;
    }

    async create(name) {
        try {
            const categoryAlreadyExists = await this.repository.findByName({
                name,
                tableName: 'categories',
            });

            if (categoryAlreadyExists) {
                return {
                    status: 204,
                    body: { message: 'Category already exists' },
                };
            }

            const category = new Category({ name });
            await this.repository.create(category);

            return { status: 201, body: category };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot create category' } };
        }
    }

    async update({ id, name }) {
        try {
            const category = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });

            Object.assign(category, { name });
            await this.repository.update(category);

            return { status: 201, body: { message: 'Updated category' } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot update category' } };
        }
    }

    async findAll() {
        try {
            const categories = await this.repository.findAll({
                tableName: 'categories',
            });
            return { status: 200, body: categories };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot list categories' } };
        }
    }

    async findById(id) {
        try {
            const category = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });
            return { status: 200, body: category };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot list category' } };
        }
    }

    async delete(id) {
        try {
            const categoryExists = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });

            if (!categoryExists) {
                return {
                    status: 404,
                    body: { message: 'Category does not exists' },
                };
            }

            await this.repository.delete({
                id,
                tableName: 'categories',
            });

            return { status: 200, body: { message: 'Deleted category' } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot delete category' } };
        }
    }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
