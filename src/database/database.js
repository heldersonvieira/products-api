const { Pool } = require('pg');
const { ENVLOCAL } = require('../../.ENVLOCAL');

const database = new Pool({
    user: ENVLOCAL.user,
    host: ENVLOCAL.host,
    database: ENVLOCAL.database,
    password: ENVLOCAL.password,
    port: ENVLOCAL.port,
});

module.exports = database;
