import { database } from '../../data/database.js';


const createPages = async (data) => {
    let { model, page, limit } = data;
    
    if (page == 0) page = 1;
    if (!limit || limit == 0) limit = 3;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const response = await database.findAll({ tableName: model });
    const currentPage = response.slice(startIndex, endIndex);

    return currentPage;
}

export { createPages };
