const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');
const orderController = require('./controllers/orderController');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');


const router = express.Router();

/**
 * routes Main
 */
router.get('/api', mainController.homePage);

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

/**
 * routes des users
 */


router.use((req, res) => {
  res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});

module.exports = router;