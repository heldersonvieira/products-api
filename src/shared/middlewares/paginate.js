import { createPages } from '../utils/createPages.js';

function paginate(model) {
    return async (request, response, next) => {
        const { page, limit } = request.query;
        const currentPage = await createPages({ model, page, limit });
        
        if (page) {
            return response.status(200).json(currentPage);
        }

        next();
    };
}

export { paginate };
