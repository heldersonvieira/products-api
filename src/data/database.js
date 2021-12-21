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

    async update(data) {
        let res;

        if (data.price) {
            const { id, name, description, price } = data;
            res = await client.query(
                `UPDATE ${schema}.products 
                    SET 
                    name = $1,
                    description = $2,
                    price = $3,
                    updated_at = now()
                    WHERE id = $4`,
                [name, description, price, id]
            );
        } else {
            const { id, name } = data;
            res = await client.query(
                `UPDATE ${schema}.categories SET name = $1 WHERE id = $2`,
                [name, id]
            );
        }

        return res;
    },

    async findOneById({ id, tableName }) {
        const { rows } = await client.query(
            `SELECT * FROM ${schema}.${tableName} WHERE id = $1`,
            [id]
        );

        return rows[0];
    },

    async findAll(data) {
        const { tableName } = data;
        const { rows } = await client.query(`
            SELECT * FROM ${schema}.${tableName} 
        `);

        return rows;
    },

    async delete({ id, tableName }) {
        if (tableName === 'products') {
            await client.query(
                `DELETE FROM ${schema}.category_products WHERE product_id = $1`,
                [id]
            );
        }

        return await client.query(
            `DELETE FROM ${schema}.${tableName} WHERE id = $1`,
            [id]
        );
    },

    async findByName({ name, tableName }) {
        const { rows } = await client.query(
            `SELECT * FROM ${schema}.${tableName} WHERE name = $1`,
            [name]
        );

        return rows[0];
    },
};
