// const Category = require('../../../categories/model/Category');
const database = require('../../../database/database');
const categoriesRepository = require('../../categories/repositories/CategoriesRepository');
const Product = require('../../products/model/Product');
const {
    createProduct,
    selectAll,
    selectById,
    updateProduct,
    deleteProduct,
} = require('../infra/queries');

class ProductsRepository {
    async create({ name, description, price, category_name }) {
        const product = new Product();

        const categoryExists = await categoriesRepository.findByName(
            category_name
        );

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
        const retorno = await database.query(
            `select * from products_api.products where id = '${product.id}'`
        );
        return retorno.rows;
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

module.exports = productsRepository;
