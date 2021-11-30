import pkg from 'pg';
import { configDatabase } from '../../.configDatabase.js';

const { Pool } = pkg;

const database = new Pool({
    user: configDatabase().user,
    host: configDatabase().host,
    database: configDatabase().database,
    password: configDatabase().password,
    port: configDatabase().port,
});

export { database };
