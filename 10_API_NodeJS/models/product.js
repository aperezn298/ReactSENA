const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  categoryId: {
    type: DataTypes.INTEGER,
    references: { model: Category, key: 'id' },
  },
}, {
  tableName: 'products',
});

Product.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Product;
