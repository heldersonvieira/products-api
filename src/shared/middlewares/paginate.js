// import { database } from '../../data/database.js';
import { Calculator } from '../utils/Calculator.js';

function paginate(model) {
    return async (request, response, next) => {
        const { page, limit } = request.query;
        const currentPage = await Calculator.paging({ model, page, limit });

        if (page) {
            return response.status(200).json(currentPage);
        }

        next();
    };
}

export { paginate };
