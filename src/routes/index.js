const express = require('express');
const categoriesRoutes = require('./categories.routes');
const productsRoutes = require('./products.routes');
const router = express.Router();

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;
