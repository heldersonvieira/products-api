const CreateProduct = require('../createProduct/CreateProduct');
const UpdateProduct = require('./UpdateProduct');

describe('Update product', () => {
    it('shouble able to update a existing product', () => {
        const product = CreateProduct.execute({
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 199.99,
            category_name: 'Shoes',
        });

        const id = product.id;

        UpdateProduct.execute({
            id,
            name: 'Nike Shoes for Man',
            description: 'Nike Shoes',
            price: 200.00,
        });

        expect(product.price).toBe(200.00);
    });
});
