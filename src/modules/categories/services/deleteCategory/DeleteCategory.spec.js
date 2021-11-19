const CreateCategory = require('../createCategory/CreateCategory');
const DeleteCategory = require('./DeleteCategory');
const ListCategories = require('../listCategories/ListCategories');

describe('Delete category', () => {
    it('should be able to delete a category', () => {
        CreateCategory.execute('tshirt');
        const shoesCategory = CreateCategory.execute('shoes');

        DeleteCategory.execute(shoesCategory.id);
        const categories = ListCategories.execute();

        expect(categories).toEqual(expect.not.objectContaining(shoesCategory));
    });
});
