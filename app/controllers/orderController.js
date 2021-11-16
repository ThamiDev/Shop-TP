const { Order, User, Product } = require('../models');

const orderController = {

    getAllOrder: async (req, res) => {
        try {
            const orders = await Order.findAll({
                order: [
                    "created_at"
                ],
                include: "product"
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

    getAllOrderForStatus: async (req, res) => {
        try {
            const status = req.params.id;
            const orders = await Order.findAll({
                where: {
                    status: status
                },
            });
            if (!orders) {
                res.json("can't find orders");
                return res.status(404);
            }
            res.json(orders);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    getAllOrdersForUser: async (req, res) => {
        try {
            const user_id = req.params.id;
            const orders = await Order.findAll({
                where: {
                    user_id: user_id
                },
            });
            if (!orders) {
                res.json("can't find orders");
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
    },

    createOrder: async (req, res) => {
        try {
            const { status, user_id, product_id } = req.body;

            const user = await User.findByPk(user_id);

            const newOrder = await Order.create({
                status,
                user_id
            });

            await newOrder.setUser(user);
            
            await newOrder.addProduct(product_id);

            res.json(newOrder);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    modifyOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            const { status, user_id, product_id } = req.body;
    
            const order = await Order.findByPk(orderId);
            if (!order) {
                return res.status(404).json("can't find the order with id: " + orderId);
            }
    
            order.status = status || order.status;
            order.user_id = user_id || order.user_id;
            order.product_id = product_id || order.product_id
            await order.save();
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
                return res.status(404).json("can't delete the order with id: " + orderId);
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