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
        const product = new Product();

        const categoryExists = await categoriesRepository.findByName(
            category_name
        );

        console.log(categoryExists);
        if (!categoryExists) {
            return { message: 'Category does not exists' };
        }

        Object.assign(product, {
            name,
            description,
            price,
            category_id: categoryExists.id,
        });

        await createProduct(product);

        return product;
    }

    async update({ id, name, description, price }) {
        await updateProduct({ id, name, description, price });
        return {
            message: 'Updated product',
        };
    }

    async findAll() {
        return await selectAll('products');
    }

    async findById(id) {
        return await selectById(id, 'products');
    }

    async delete(id) {
        let message = 'Deleted product';
        const productStillExists = await deleteProduct(id);

        if (!productStillExists) {
            message = 'Product does not exists';
        }

        return { message };
    }
}

const productsRepository = new ProductsRepository();

export { productsRepository };
