import { app } from '../app.js';
import request from 'supertest';
import { client } from '../data/client.js';

let category;

describe('Products', function () {
    beforeEach(async () => {
        await client.query(`
            INSERT INTO products_api_test.categories (id, name)
            VALUES('5097ee9c-f639-4488-8368-cc717f4ab421', 'defaultCategory')
        `);

        const res = await client.query(
            'select * from products_api_test.categories'
        );
        category = res.rows[0];
    });

    afterEach(async () => {
        await client.query('DELETE FROM products_api_test.category_products');
        await client.query('DELETE FROM products_api_test.products');
        await client.query('DELETE FROM products_api_test.categories');
    });

    afterAll(() => {
        client.end();
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

    it('should be able to update a product', async () => {
        const postRes = await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });

        const id = postRes.body.id;

        const putRes = await request(app).put(`/products/${id}`).send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 500.00,
        });

        expect(putRes.status).toBe(201);
        expect(putRes.body.message).toBe('Updated product');
    });

    it('should be able to list all products', async () => {
        await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });

        const getRes = await request(app).get('/products');

        expect(getRes.status).toBe(200);
        expect(getRes.body.length).toBe(1);
    });

    it('should be able to delete a product', async () => {
        const postRes = await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });

        const id = postRes.body.id;
        const deleteRes = await request(app).delete(`/products/${id}`);
        const getRes = await request(app).get(`/products`);

        expect(deleteRes.status).toBe(200);
        expect(getRes.body.length).toBe(0);
    });

    it('should be able to find product by id', async () => {
        const postRes = await request(app).post('/products').send({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: category.name,
        });

        const id = postRes.body.id;
        const getRes = await request(app).get(`/products/${id}`);

        expect(getRes.status).toBe(200);
        expect(getRes.body.id).toEqual(id);
    });
});
