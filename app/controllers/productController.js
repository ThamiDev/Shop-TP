const { Product } = require("../models");

const productController = {

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            if (!products) {
                res.json("can't find products");
                return res.status(404);
            }
            res.json(products);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    getAllProductsForCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const products = await Product.findAll({
                where: {
                    category_id: categoryId,
                },
            });
            if (!products) {
                res.json("can't find products");
                return res.status(404);
            }
            res.json(products);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    getOneProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await Product.findByPk(productId);
            if (!product) {
                res.json("can't find product");
                return res.status(404);
            }
            res.json(product);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    createProduct: async (req, res) => {
        try {
            const { name, description, picture, amount, category_id } = req.body;

            const bodyErrors = [];
            if (!name) {
                bodyErrors.push("name can't be empty");
            }
            if (!description) {
                bodyErrors.push("description can't be empty");
            }
            if (!picture) {
                bodyErrors.push("picture can't be empty");
            }
            if (!amount) {
                bodyErrors.push("amount can't be empty");
            }
            if (!category_id) {
                bodyErrors.push("categoryId can't be empty");
            }
            if (bodyErrors.length) {
                return res.status(400).json(bodyErrors);
            }

            const newProduct = Product.build({
                name,
                description,
                picture,
                amount,
                category_id
            });

            await newProduct.save();
            res.json(newProduct);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    modifyProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const { name, description, picture, amount, category_id } = req.body;

            const product = await Product.findByPk(productId);
            if (!product) {
                return res.status(404).json("can't find the product with id: " + productId);
            }

            product.name = name || product.name;
            product.description = description || product.description;
            product.picture = picture || product.picture;
            product.amount = amount || product.amount;
            product.category_id = category_id || product.category_id;
            await product.save();
            res.json(product);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await Product.findByPk(productId);
            if (!product) {
                res.status(404).json("Can't delete a product with id: " + productId);
            } else {
                await product.destroy();
                res.json("product well destroyed");
            }

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }


}

module.exports = productController;