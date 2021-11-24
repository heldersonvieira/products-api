import { database } from '../../../../database/database.js';

const createCategory = async ({ id, name }) => {
    const res = await database.query(
        'INSERT INTO products_api.categories (id, name) VALUES ($1, $2)',
        [id, name]
    );
    return res;
};

const updateCategory = async ({ id, name }) => {
    const res = await database.query(
        `UPDATE products_api.categories c SET name = '${name}' WHERE id = '${id}'`
    );
    return res;
};

const selectAll = async (table) => {
    const res = await database.query(`SELECT * FROM products_api.${table}`);
    return res.rows;
};

const selectById = async (id, table) => {
    const res = await database.query(
        `SELECT * FROM products_api.${table} c WHERE id = '${id}'`
    );
    return res.rows;
};

const selectCategoryByName = async (name) => {
    const res = await database.query(
        `SELECT * FROM products_api.categories WHERE name = LOWER('${name}')`
    );

    return res.rows[0];
};

const deleteCategory = async (id) => {
    const res = await database.query(
        `DELETE FROM products_api.categories WHERE id = '${id}'`
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
