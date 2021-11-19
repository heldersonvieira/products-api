const CreateProduct = require('../createProduct/CreateProduct');
const DeleteProduct = require('./DeleteProduct');
const ListProducts = require('../listProducts/ListProducts');

describe('Delete product', () => {
    it('should be able to delete a product', () => {
        CreateProduct.execute({
            name: 'Produto',
            description: 'Produto caro',
            price: 599.99,
            category_name: 'Category',
        });

        const product = CreateProduct.execute({
            name: 'Produto',
            description: 'Produto barato',
            price: 1.99,
            category_name: 'Category',
        });

        DeleteProduct.execute(product.id);

        const products = ListProducts.execute();

        expect(products).toEqual(expect.not.objectContaining(product));
    });
});
