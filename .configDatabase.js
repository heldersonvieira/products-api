const configDatabase = () => {
    return process.env.NODE_ENV === 'test'
        ? {
              user: 'postgres',
              host: '172.18.0.2',
              database: 'products_api_test',
              password: 'postgres',
              port: 5432,
          }
        : {
              user: 'postgres',
              host: '172.18.0.2',
              database: 'products_api',
              password: 'postgres',
              port: 5432,
          };
};

const schema = configDatabase().database;

export { configDatabase, schema };
