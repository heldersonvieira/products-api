import { database } from '../../../data/database.js';
import { AppErros } from '../../../errors/messages.js';
import { Category } from '../model/Category.js';

class CategoriesRepository {
    constructor() {
        this.repository = database;
    }

    async create(name) {
        try {
            const categoryAlreadyExists = await this.repository.findByName({
                name,
                tableName: 'categories',
            });

            if (categoryAlreadyExists) {
                return {
                    status: 204,
                    body: { message: 'Category already exists' },
                };
            }

            const category = new Category({ name });
            await this.repository.create(category);

            return { status: 201, body: category };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot create category' } };
        }
    }

    async update({ id, name }) {
        try {
            const category = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });

            Object.assign(category, { name });
            await this.repository.update(category);

            return { status: 201, body: { message: 'Updated category' } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot update category' } };
        }
    }

    async findAll({ page = '' }) {
        // if (page == 0) page = 1;
        try {
            const categories = await this.repository.findAll({
                page,
                limit: 2,
                tableName: 'categories',
            });
            return { status: 200, body: categories };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot list categories' } };
        }
    }

    async findById(id) {
        try {
            const category = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });
            return { status: 200, body: category };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot list category' } };
        }
    }

    async delete(id) {
        try {
            const categoryExists = await this.repository.findOneById({
                id,
                tableName: 'categories',
            });

            if (!categoryExists) {
                return {
                    status: 404,
                    body: { message: 'Category does not exists' },
                };
            }

            await this.repository.delete({
                id,
                tableName: 'categories',
            });

            return { status: 200, body: { message: 'Deleted category' } };
        } catch (error) {
            return { status: 400, body: { message: 'Cannot delete category' } };
        }
    }
}

const categoriesRepository = new CategoriesRepository();

export { categoriesRepository };


/**
[
  {
    "id": "0e8e95ca-db0f-4b19-9f7a-d980862e1925",
    "name": "glasses",
    "created_at": "2021-12-13T00:00:00.000Z"
  },
  {
    "id": "8c03106c-e1f4-43da-adc6-46ed7d897df8",
    "name": "leruaite",
    "created_at": "2021-12-18T00:00:00.000Z"
  },
  {
    "id": "5097ee9c-f639-4488-8368-cc717f4ab421",
    "name": "shoes",
    "created_at": "2021-11-30T00:00:00.000Z"
  },
  {
    "id": "9af95e26-a3b4-4dae-ac18-87f88453b683",
    "name": "tshirt",
    "created_at": "2021-12-19T00:00:00.000Z"
  },
  {
    "id": "673c6b02-0429-4020-8273-d06d3dee592d",
    "name": "pants",
    "created_at": "2021-12-19T00:00:00.000Z"
  },
  {
    "id": "3d570e14-553a-4917-8fb8-6af30a3f3a9b",
    "name": "jeans",
    "created_at": "2021-12-19T00:00:00.000Z"
  }
]
 */