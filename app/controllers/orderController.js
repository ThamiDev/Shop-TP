const { Order } = require('../models');

const orderController = {

    getAllOrder: async (req, res) => {
        try {
            const orders = await Order.findAll({
                order: [
                    ["order", "ASC"],
                ],
            });
            if (!orders) {
                res.json("can't find products");
                return res.status(404);
            }
            res.json(orders);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    getOneOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            const order = await Order.findByPk(orderId);
            if (!order) {
                res.json("can't find order");
                return res.status(404);
            }
            res.json(order);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    deleteOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            const order = await Order.findByPk(orderId);
            if (!order) {
                res.status(404).json("Can't delete a order with id: " + orderId);
            } else {
                await order.destroy();
                res.json("order well destroyed");
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = orderController;