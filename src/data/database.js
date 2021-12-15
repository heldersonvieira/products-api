import { Category } from '../modules/categories/model/Category.js';
import { Product } from '../modules/products/model/Product.js';
import { client, schema } from './client.js';

export const database = {
    async create(data) {
        let res;
        if (data instanceof Category) {
            const { id, name } = data;
            res = await client.query(
                `INSERT INTO ${schema}.categories (id, name) VALUES ($1, $2)`,
                [id, name]
            );
        }

        if (data instanceof Product) {
            const { id, name, description, price, category_id } = data;
            res = await client.query(
                `INSERT INTO ${schema}.products 
                (id, name, description, price, category_id) 
                VALUES ($1, $2, $3, $4, $5)`,
                [id, name, description, price, category_id]
            );

            await client.query(
                `INSERT INTO ${schema}.category_products 
                (category_id, product_id) VALUES ($1, $2)`,
                [category_id, id]
            );
        }
        return res;
    },
};
