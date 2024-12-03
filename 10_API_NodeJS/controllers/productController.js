const Product = require('../models/product');
const Category = require('../models/category');

exports.createProduct = async (req, res) => {
  const { name, price, categoryId } = req.body;
  try {
    const product = await Product.create({ name, price, categoryId });
    res.status(201).json({ message: 'Product created', product });
  } catch (error) {
    res.status(400).json({ error: 'Error creating product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching products' });
  }
};
