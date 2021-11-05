/* Imports */
const User = require("./user");
const Product = require("./product");
const Category = require("./category");
const Order = require("./order");

/* Associations */

Order.belongsTo(User, {
    as: "user",
    foreignKey: "user_id",
});

User.hasMany(Order, {
    as: "order",
    foreignKey: "user_id",
});

Product.belongsTo(Category, {
    as: "category",
    foreignKey: "category_id",
});

Category.hasMany(Product, {
    as: "product",
    foreignKey: "category_id",
});

Order.belongsToMany(Product, {
    as: "product",
    through: "order_has_product",
    foreignKey: "order_id",
    otherKey: "product_id",
    timestamps: false,
})

Product.belongsToMany(Order, {
    as: "order",
    through: "order_has_product",
    foreignKey: "product_id",
    otherKey: "order_id",
    timestamps: false,
})

/* Exports */
module.exports = { User, Product, Category };