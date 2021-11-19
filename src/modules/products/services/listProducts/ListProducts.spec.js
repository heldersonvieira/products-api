const CreateProduct = require('../createProduct/CreateProduct');
const ListProducts = require('./ListProducts');

describe('Find products', () => {
    it('should be able to find all products', () => {
        CreateProduct.execute({
            name: 'Produto',
            description: 'Produto caro',
            price: 599.0,
            category_name: 'Category',
        });

        CreateProduct.execute({
            name: 'Produto 2',
            description: 'Produto barato',
            price: 1.99,
            category_name: 'Category',
        });

        const products = ListProducts.execute();

        expect(products).toHaveLength(2);
    });
});
