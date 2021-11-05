const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Order extends Model {}

Order.init(
  {
    status: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  },
  {
    sequelize,
    tableName: "order",
  }
);

module.exports = Order;