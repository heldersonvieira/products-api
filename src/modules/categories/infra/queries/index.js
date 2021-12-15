import { client } from '../../../../data/client.js';
import { schema } from '../../../../data/client.js';

const createCategory = async ({ id, name }) => {
    const res = await client.query(
        `INSERT INTO ${schema}.categories (id, name) VALUES ($1, $2)`,
        [id, name]
    );
    return res;
};

const updateCategory = async ({ id, name }) => {
    const res = await client.query(
        `UPDATE ${schema}.categories c SET name = '${name}' WHERE id = '${id}'`
    );
    return res;
};

const selectAll = async (table) => {
    const res = await client.query(`SELECT * FROM ${schema}.${table}`);
    return res.rows;
};

const selectById = async (id, table) => {
    const res = await client.query(
        `SELECT * FROM ${schema}.${table} c WHERE id = '${id}'`
    );
    return res.rows;
};

const selectCategoryByName = async (name) => {
    const res = await client.query(
        `SELECT * FROM ${schema}.categories WHERE name = LOWER('${name}')`
    );

    return res.rows[0];
};

const deleteCategory = async (id) => {
    const res = await client.query(
        `DELETE FROM ${schema}.categories WHERE id = '${id}'`
    );

    return res.rowCount;
};

export {
    createCategory,
    updateCategory,
    selectAll,
    selectById,
    selectCategoryByName,
    deleteCategory,
};
