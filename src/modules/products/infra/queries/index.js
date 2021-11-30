import { database } from '../../../../database/database.js';
import { schema } from '../../../../../.configDatabase.js';

const createProduct = async ({ id, name, description, price, category_id }) => {
    const res = await database.query(
        `INSERT INTO ${schema}.products 
        (id, name, description, price, category_id) 
        VALUES ($1, $2, $3, $4, $5)`,
        [id, name, description, price, category_id]
    );

    await database.query(
        `INSERT INTO ${schema}.category_products 
        (category_id, product_id) VALUES ($1, $2)`,
        [category_id, id]
    );

    return res;
};

const updateProduct = async ({ id, name, description, price }) => {
    const res = await database.query(`
        UPDATE ${schema}.product
        SET 
        name = '${name}',
        description = '${description}',
        price = ${price},
        updated_at = now()
        where id = '${id}'
    `);
    return res;
};

const selectAll = async (table) => {
    const res = await database.query(`SELECT * FROM ${schema}.${table}`);
    return res.rows;
};

const selectById = async (id, table) => {
    const res = await database.query(
        `SELECT * FROM ${schema}.${table} WHERE id = '${id}'`
    );
    return res.rows;
};

const deleteProduct = async (id) => {
    await database.query(
        `DELETE FROM ${schema}.category_products WHERE product_id = '${id}'`
    );
    
    const res = await database.query(
        `DELETE FROM ${schema}.products WHERE id = '${id}'`
    );

    return res.rowCount;
};

export { createProduct, updateProduct, selectById, selectAll, deleteProduct };
