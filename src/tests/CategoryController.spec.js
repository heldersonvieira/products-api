import { app } from '../app.js';
import request from 'supertest';
import { database } from '../database/database.js';

describe('Categories', function () {
    afterEach(async () => {
        await database.query('DELETE FROM products_api_test.categories');
    });

    it('should be able to create a new category', async () => {
      const response = await request(app).post('/categories').send({
            name: 'test',
        });  
        expect(response.status).toBe(201);
    });

    it('should not be able to create a category with name exists', async () => {
        await request(app).post('/categories').send({
            name: 'test',
        });

        const response = await request(app).post('/categories').send({
            name: 'test',
        });
        
        expect(response.status).toBe(204);
    })

    it('should be able to list all categories', async () => {
        await request(app).post('/categories').send({
            name: 'testList',
        });

        const response = await request(app).get('/categories/search/all');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it('should be able to find a category by id', async () => {
        const postResponse = await request(app).post('/categories').send({
            name: 'CategoryById',
        });
        const id = postResponse.body.id;

        const getResponse = await request(app).get(`/categories/search/${id}`);

        expect(getResponse.status).toBe(200);
        expect(getResponse.body[0].name).toEqual(postResponse.body.name);
    });
});
