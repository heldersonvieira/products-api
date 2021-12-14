import { categoriesRepository } from '../../categories/repositories/CategoriesRepository.js';
import { Product } from '../../products/model/Product.js';
import {
    createProduct,
    selectAll,
    selectById,
    updateProduct,
    deleteProduct,
} from '../infra/queries/index.js';

class ProductsRepository {
    async create({ name, description, price, category_name }) {
        try {
            const res = await categoriesRepository.findAll();
            const categories = res.body;
            
            const categoryExists = categories.find(category => category.name === category_name);
            if (!categoryExists) {
                return {
                    status: 404,
                    body: {
                        message: `Category does not exists. First add the category ${category_name}`,
                    },
                };
            }

            const product = new Product();
            Object.assign(product, {
                name,
                description,
                price,
                category_id: categoryExists.id,
            });

            await createProduct(product);

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
        let response
        try {
            const product = this.findById(id);
            if (!product) 
            await updateProduct({ id, name, description, price });
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
            const products = await selectAll('products');
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
            const product = await selectById(id, 'products');
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
            let message = 'Deleted product';
            let status = 200;
            const productStillExists = await deleteProduct(id);

            if (!productStillExists) {
                status = 404;
                message = 'Product does not exists';
            }

            return { status, body: { message } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot delete product' } };
        }
    }
}

const productsRepository = new ProductsRepository();

export { productsRepository };
