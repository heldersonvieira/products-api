import { database } from '../../../../database/database.js';
import { schema } from '../../../../../.configDatabase.js';


const createCategory = async ({ id, name }) => {
    const res = await database.query(
        `INSERT INTO ${schema}.categories (id, name) VALUES ($1, $2)`,
        [id, name]
    );
    return res;
};

const updateCategory = async ({ id, name }) => {
    const res = await database.query(
        `UPDATE ${schema}.categories c SET name = '${name}' WHERE id = '${id}'`
    );
    return res;
};

const selectAll = async (table) => {
    const res = await database.query(
        `SELECT * FROM ${schema}.${table}`
    );
    return res.rows;
};

const selectById = async (id, table) => {
    const res = await database.query(
        `SELECT * FROM ${schema}.${table} c WHERE id = '${id}'`
    );
    return res.rows;
};

const selectCategoryByName = async (name) => {
    const res = await database.query(
        `SELECT * FROM ${schema}.categories WHERE name = LOWER('${name}')`
    );

    return res.rows[0];
};

const deleteCategory = async (id) => {
    const res = await database.query(
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
