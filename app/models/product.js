const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Product extends Model {}

Product.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  },
  {
    sequelize,
    tableName: "product",
  }
);

module.exports = Product;