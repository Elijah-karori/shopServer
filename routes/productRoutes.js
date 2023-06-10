const express = require('express');
const router = express.Router();
const productController = require('../controllers/products/productsServices');

// GET all products
router.get('/', productController.getAllProducts);

// POST search a product
router.post('/', productController.searchProduct);

// GET a specific product
router.get('/:name', productController.getProduct);



module.exports = router;
