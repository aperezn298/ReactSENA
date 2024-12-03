const express = require('express');
const { createProduct, getAllProducts } = require('../controllers/productController');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');

router.post('/product', authenticate, createProduct);
router.get('/products', getAllProducts);

module.exports = router;
