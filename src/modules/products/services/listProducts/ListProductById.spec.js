const CreateProduct = require('../createProduct/CreateProduct');
const ListProductById = require('./ListProductById');

describe('Find product', () => {
    it('should be able to find product by id', () => {
        const product = CreateProduct.execute({
            name: 'Produto',
            description: 'Produto caro',
            price: 599.0,
            category_name: 'Category',
        });

        const findedProduct = ListProductById.execute(product.id);

        expect(findedProduct).toEqual(product);
    });
});
