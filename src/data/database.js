import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

let schema = process.env.SCHEMA;

const prodConfig = {
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

let database = new Client(prodConfig);

database.connect();

if (process.env.NODE_ENV === 'test') {
    schema = process.env.SCHEMA_TEST;

    database.end();
    database = new Client(testConfig);
    database.connect();
};

if (!database) {
    database.connect();
}

export { database, schema };
