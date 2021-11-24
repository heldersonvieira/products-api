const database = require('../../../../database/database');

exports.createProduct = async ({
    id,
    name,
    description,
    price,
    category_id,
}) => {
    const res = await database.query(
        `INSERT INTO products_api.products 
        (id, name, description, price, category_id) 
        VALUES ($1, $2, $3, $4, $5)`,
        [id, name, description, price, category_id]
    );

    await database.query(
        `INSERT INTO products_api.category_products 
        (category_id, product_id) VALUES ($1, $2)`,
        [category_id, id]
    );
    
    return res;
};

exports.updateProduct = async ({ id, name, description, price }) => {
    const res = await database.query(
        `
            UPDATE products_api.products 
            SET 
            name = '${name}',
            description = '${description}',
            price = ${price},
            updated_at = now()
            where id = '${id}'
        `
    );
    return res;
};

exports.selectAll = async (table) => {
    const res = await database.query(`SELECT * FROM products_api.${table}`);
    return res.rows;
};

exports.selectById = async (id, table) => {
    const res = await database.query(
        `SELECT * FROM products_api.${table} WHERE id = '${id}'`
    );
    return res.rows;
};

exports.deleteProduct = async (id) => {
    const res = await database.query(
        `DELETE FROM products_api.products WHERE id = '${id}'`
    );

    return res.rowCount;
};
