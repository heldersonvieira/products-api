import { database } from '../../data/database.js';

function paginate(model) {
    return async (request, response, next) => {
        let { page, limit } = request.query;

        if (page == 0) page = 1;
        if (!limit || limit == 0) limit = 3;
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const data = await database.findAll({ tableName: model });
        const currentPage = data.slice(startIndex, endIndex);
    
        if (page) {
            return response.status(200).json(currentPage);
        }
    
        next();
    }
}

export { paginate };
