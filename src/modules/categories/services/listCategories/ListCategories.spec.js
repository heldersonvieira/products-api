const CreateCategory = require('../createCategory/CreateCategory');
const ListCategories = require('./ListCategories');

describe('Find categories', () => {
    it('should be able to find all categories', () => {
        CreateCategory.execute('shoes');

        CreateCategory.execute('t-shirt');

        const categories = ListCategories.execute();

        expect(categories).toHaveLength(2);
    });
});
