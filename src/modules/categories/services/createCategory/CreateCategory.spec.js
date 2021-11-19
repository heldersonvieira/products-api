const CreateCategory = require('./CreateCategory');

describe('Create category', () => {
    it('should be able to create a new category', () => {
        const category = CreateCategory.execute('shoes');

        expect(category).toHaveProperty('id');
    });
});
