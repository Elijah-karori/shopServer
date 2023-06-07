const express = require('express');
const router = express.Router();
const productController = require('../controllers/products/productsServices');

// GET all products
router.get('/', productController.getAllProducts);

// POST create a product
router.post('/', productController.createProduct);

// GET a specific product
router.get('/:name', productController.getProduct);

// PUT update a product
router.put('/:name', productController.updateProduct);

// DELETE delete a product
router.delete('/:name', productController.deleteProduct);

module.exports = router;
