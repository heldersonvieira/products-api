const uuid = require('uuid');

class Category {
    constructor(name) {
        this.id = uuid.v4();
        this.name = name;
        this.created_at = new Date();
    }
}

module.exports = Category;
