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
    }
}

module.exports = productController;