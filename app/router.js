const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');


const router = express.Router();

/** Lists */
router.get('/api', mainController.homePage);


router.use((req, res) => {
  res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});

module.exports = router;