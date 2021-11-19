const CreateCategory = require('../createCategory/CreateCategory');
const ListCategoryById = require('./ListCategoryById');

describe('Find category', () => {
    it('should be able to find category by id', () => {
        const category = CreateCategory.execute('name');

        const findedCategory = ListCategoryById.execute(category.id);

        expect(findedCategory).toEqual(category);
    });
});
