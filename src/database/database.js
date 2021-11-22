const { Pool } = require('pg');

const database = new Pool({
    user: 'postgres',
    host: '172.18.0.2',
    database: 'products_api',
    password: 'postgres',
    port: 5432,
});

module.exports = database;
