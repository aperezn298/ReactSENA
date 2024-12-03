const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'categories',
});

module.exports = Category;
