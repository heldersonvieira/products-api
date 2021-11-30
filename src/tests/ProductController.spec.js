import { app } from '../app.js';
import request from 'supertest';
import { database } from '../database/database.js';

let category;

describe('Products', function () {
    beforeEach(async () => {
        await database.query(`
            INSERT INTO products_api_test.categories (id, name)
            VALUES('5097ee9c-f639-4488-8368-cc717f4ab421', 'defaultCategory')
        `);

        const res = await database.query(
            'select * from products_api_test.categories'
        );
        category = res.rows[0];
    });

    afterEach(async () => {
        await database.query('DELETE FROM products_api_test.category_products');
        await database.query('DELETE FROM products_api_test.products');
        await database.query('DELETE FROM products_api_test.categories');
    });

    it('should be able to create a new product', async () => {
        const postRes = await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });
        
        expect(postRes.status).toBe(201);
        expect(postRes.body).toHaveProperty('id');
    });

    it('should not be able to create a product with category non-existent', async () => {
        const postRes = await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: 'nonexistent',
        });
        
        expect(postRes.status).toBe(404);
        expect(postRes.body.message).toBeTruthy();
    });

    it('should be able to list all products', async () => {
        await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });

        const getRes = await request(app).get('/products/search/all');
        
        expect(getRes.status).toBe(200);
        expect(getRes.body.length).toBe(1);
    });

    it('should be able to find product by id', async () => {
        const postRes = await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });

        const id = postRes.body.id;
        const getRes = await request(app).get(`/products/search/${id}`);
        
        expect(getRes.status).toBe(200);
        expect(getRes.body[0].id).toEqual(id);
    });
});
