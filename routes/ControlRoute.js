const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ProductControl/itemsServices');

// GET all products
router.get('/', ItemController.getAllProducts);

// POST create a product
router.post('/', ItemController.createProduct);

// GET a specific product
router.get('/:name', ItemController.getProduct);

// PUT update a product
router.put('/:name', ItemController.updateProduct);

// DELETE delete a product
router.delete('/:name', ItemController.deleteProduct);

module.exports = router;
