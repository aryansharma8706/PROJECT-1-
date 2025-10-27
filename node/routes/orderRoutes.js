const express = require('express');
const router = express.Router();
const { getAllOrder } = require('../controllers/orderControllers.js');

router.get('/orders', getAllOrder);

module.exports = router;
