import { categoriesRepository } from '../../categories/repositories/CategoriesRepository.js';
import { Product } from '../../products/model/Product.js';
import { database } from '../../../data/database.js';

class ProductsRepository {
    constructor() {
        this.repository = database;
    }

    async create({ name, description, price, category_name }) {
        try {
            const { body: categories } = await categoriesRepository.findAll();
            const categoryExists = categories.find(
                (category) => category.name === category_name
            );

            if (!categoryExists) {
                return {
                    status: 404,
                    body: {
                        message: `Category does not exists. First add the category ${category_name}`,
                    },
                };
            }

            const product = new Product({
                name,
                description,
                price,
                category_id: categoryExists.id,
            });

            await this.repository.create(product);

            return {
                status: 201,
                body: product,
            };
        } catch (error) {
            return {
                status: 400,
                body: { message: 'Product cannot be created' },
            };
        }
    }

    async update({ id, name, description, price }) {
        try {
            const product = await this.repository.findOneById({
                id,
                tableName: 'products',
            });

            Object.assign(product, { id, name, description, price });
            if (product) await this.repository.update(product);

            return {
                status: 201,
                body: { message: 'Updated product' },
            };
        } catch (error) {
            return {
                status: 400,
                body: {
                    message: `Product cannot be updated, try again later.`,
                },
            };
        }
    }

    async findAll() {
        try {
            const products = await this.repository.findAll({
                tableName: 'products',
            });
            return { status: 200, body: products };
        } catch (error) {
            return {
                status: 400,
                body: {
                    message: 'Cannot list products',
                },
            };
        }
    }

    async findById(id) {
        try {
            const product = await this.repository.findOneById({
                id,
                tableName: 'products',
            });
            return { status: 200, body: product };
        } catch (error) {
            return {
                status: 400,
                body: { message: 'Cannot list product' },
            };
        }
    }

    async delete(id) {
        try {
            const productExists = await this.repository.findOneById({
                id,
                tableName: 'products',
            });

            if (!productExists) {
                return {
                    status: 404,
                    body: { message: 'Product does not exists' },
                };
            }

            await this.repository.delete({
                id,
                tableName: 'products',
            });

            return { status: 200, body: { message: 'Deleted product' } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot delete product' } };
        }
    }
}

const productsRepository = new ProductsRepository();

export { productsRepository };
