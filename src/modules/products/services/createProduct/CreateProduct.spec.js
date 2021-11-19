const CreateProduct = require('./CreateProduct');

describe('Create product', () => {
    
    it('should be able to create a new product', () => {
        const product = CreateProduct.execute({
            name: 'Produto',
            description: 'Produto caro',
            price: 599.00,
            category_name: 'Category'
        });

        expect(product).toHaveProperty('id');
    })
});
