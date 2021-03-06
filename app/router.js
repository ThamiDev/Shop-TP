const express = require('express');

// importer les controllers
const orderController = require('./controllers/orderController');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');


const router = express.Router();

/**
 * routes des users
 */
router.get('/api/users', userController.getAllUsers);
router.post('/api/register', userController.signUp);
router.post('/api/login', userController.signIn);
router.get('/api/logout', userController.logout);
router.patch('/api/user/:id', userController.modifyUser);

/**
 * routes des products
 */
router.get('/api/product/:id', productController.getOneProduct);
router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id/category', productController.getAllProductsForCategory);
router.post('/api/product', productController.createProduct);
router.patch('/api/product/:id', productController.modifyProduct);
router.delete('/api/product/:id', productController.deleteProduct);

/**
 * routes des orders
 */
router.get('/api/orders', orderController.getAllOrder);
router.get('/api/orders/:id/status', orderController.getAllOrderForStatus);
router.get('/api/orders/:id/user', orderController.getAllOrdersForUser);
router.post('/api/orders', orderController.createOrder);
router.patch('/api/order/:id', orderController.modifyOrder);



router.use((req, res) => {
  res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});

module.exports = router;