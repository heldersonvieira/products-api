import { database } from '../../../data/database.js';
import { AppError } from '../../../shared/errors/AppError.js';
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
                throw new AppError('Category already exists', 204);
            }

            const category = new Category({ name });
            await this.repository.create(category);

            return { status: 201, body: category };
        } catch (error) {
            throw new AppError('CAnnot create category');
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
            throw new AppError('Cannot update category');
        }
    }

    async findAll() {
        try {
            const categories = await this.repository.findAll({
                tableName: 'categories',
            });
            return { status: 200, body: categories };
        } catch (error) {
            throw new AppError('Cannot list categories');
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
            throw new AppError('Cannot list category');
        }
    }

    async delete(id) {
        try {
            const categoryExists = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });

            if (!categoryExists) {
                throw new AppError('Category does not exists', 404);
            }

            await this.repository.delete({
                id,
                tableName: 'categories',
            });

            return { status: 200, body: { message: 'Deleted category' } };
        } catch (error) {
            throw new AppError('Cannot delete category');
        }
    }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };
