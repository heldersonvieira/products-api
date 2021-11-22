const database = require('../database');

exports.create = async ({ id, name }) => {
    const res = await database.query(
        'INSERT INTO products_api.categories (id, name) VALUES ($1, $2)',
        [id, name]
    );
    return res;
};

exports.update = async ({ id, name }) => {
    const res = await database.query(
        `UPDATE products_api.categories c SET name = '${name}' WHERE id = '${id}'`
    );
    return res;
};

exports.selectAll = async (table) => {
    const res = await database.query(`SELECT * FROM products_api.${table}`);
    return res.rows;
};

exports.selectById = async (id, table) => {
    const res = await database.query(
        `SELECT * FROM products_api.${table} c WHERE id = '${id}'`
    );

    return res.rows;
};

exports.deleteCategory = async (id) => {
    return await database.query(
        `DELETE FROM products_api.categories WHERE id = '${id}'`
    );
};
