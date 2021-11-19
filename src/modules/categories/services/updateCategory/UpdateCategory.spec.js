const CreateCategory = require('../createCategory/CreateCategory');
const UpdateCategory = require('./UpdateCategory');

describe('Update category', () => {
    it('shouble able to update a existing category', () => {
        const category = CreateCategory.execute('shoes');

        const id = category.id;

        UpdateCategory.execute(id, 't-shirt');

        expect(category.name).toBe('t-shirt');
    
    });
});
