const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    firstname: DataTypes.TEXT,
    lastname: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: DataTypes.TEXT
  },
  {
    sequelize,
    tableName: "user",
  }
);

module.exports = User;