import { app } from '../app.js';
import request from 'supertest';
import { client } from '../data/client.js';

describe('Categories', function () {
    afterEach(async () => {
        await client.query('DELETE FROM products_api_test.category_products');
        await client.query('DELETE FROM products_api_test.products');
        await client.query('DELETE FROM products_api_test.categories');
    });

    afterEach(async () => {
        await client.query('DELETE FROM products_api_test.categories');
    });

    afterAll(() => {
        client.end();
    });

    it('should be able to create a new category', async () => {
        const response = await request(app).post('/categories').send({
            name: 'test',
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should not be able to create a category with name exists', async () => {
        await request(app).post('/categories').send({
            name: 'test',
        });

        const response = await request(app).post('/categories').send({
            name: 'test',
        });

        expect(response.status).toBe(204);
    });

    it('should be able to list all categories', async () => {
        await request(app).post('/categories').send({
            name: 'testList',
        });
        const response = await request(app).get('/categories');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it('should be able to find a category by id', async () => {
        const postResponse = await request(app).post('/categories').send({
            name: 'CategoryById',
        });
        const id = postResponse.body.id;
        const getResponse = await request(app).get(`/categories/${id}`);

        expect(getResponse.status).toBe(200);
        expect(getResponse.body.name).toEqual(postResponse.body.name);
    });

    it('should be able to update a category', async () => {
        const postResponse = await request(app).post('/categories').send({
            name: 'Category test',
        });

        const newName = 'Updated category';
        const id = postResponse.body.id;

        const putResponse = await request(app).put(`/categories/${id}`).send({
            name: newName,
        });
        const getResponse = await request(app).get(`/categories/${id}`);

        expect(putResponse.status).toBe(201);
        expect(getResponse.body.name).toEqual(newName);
    });

    it('should be able to delete a category', async () => {
        const postResponse = await request(app).post('/categories').send({
            name: 'Delete test',
        });

        const id = postResponse.body.id;
        const deleteResponse = await request(app).delete(`/categories/${id}`);
        const getResponse = await request(app).get(`/categories`);

        expect(deleteResponse.status).toBe(200);
        expect(getResponse.body.length).toBe(0);
    });

    it('should not be able to delete a non-existent category', async () => {
        const postResponse = await request(app).post('/categories').send({
            name: 'Delete test',
        });

        const id = postResponse.body.id;
        await request(app).delete(`/categories/${id}`);
        const deleteResponse = await request(app).delete(`/categories/${id}`);

        expect(deleteResponse.status).toBe(404);
    });
});
