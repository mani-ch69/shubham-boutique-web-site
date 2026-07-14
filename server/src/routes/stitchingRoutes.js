const express = require('express');
const router = express.Router();
const { submitOrder, getUserOrders } = require('../controllers/stitchingController');
const { auth } = require('../middleware/auth');

router.post('/order', auth, submitOrder);
router.get('/my-orders', auth, getUserOrders);

module.exports = router;
