import { client } from '../client.js';
import { v4 as uuidv4 } from 'uuid';
import { encryptPassword } from '../../shared/utils/encryptPassword.js';

export const createUserAdmin = async () => {
    // const id = uuidv4();
    const id = '06394620-0f60-4c4c-8316-407d3dc86e02'; //uuid unico
    const password = await encryptPassword('admin');

    const query = await client.query(
        `SELECT * FROM products_api.users WHERE id='${id}' and name='admin'`
    );

    const userAdmin = query.rows[0];
    if (!userAdmin) {
        await client.query(`
            INSERT INTO products_api.users(
                id, 
                cpf, 
                name, 
                email, 
                password, 
                is_admin, 
                created_at)
            VALUES(
                '${id}', 
                '00000000000', 
                'admin', 
                'admin@products_api.com.br', 
                '${password}', 
                true, 
                'now()')
        `);
    };
};
