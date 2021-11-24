import pkg from 'pg';
import { ENVLOCAL } from '../../.ENVLOCAL.js';

const { Pool } = pkg;

const database = new Pool({
    user: 'postgres',
    host: '172.18.0.2',
    database: 'products_api',
    password: 'postgres',
    port: 5432,
});

export { database };
