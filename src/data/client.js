import 'dotenv/config';
import pkg from 'pg';
import { createUserAdmin } from './seed/admin.js';
const { Client } = pkg;

let schema = process.env.SCHEMA;

const productionConfig = {
    user: process.env.USER_PG,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
};

const testConfig = {
    user: process.env.USER_PG_TEST,
    host: process.env.HOST_TEST,
    database: process.env.DATABASE_TEST,
    password: process.env.PASSWORD_TEST,
    port: process.env.PORT_TEST,
};

let client = new Client(productionConfig);
client.connect();

if (process.env.NODE_ENV === 'test') {
    schema = process.env.SCHEMA_TEST;

    client.end();
    client = new Client(testConfig);
    client.connect();
};

if (!client) {
    client.connect();
}

createUserAdmin();

export { client, schema };
