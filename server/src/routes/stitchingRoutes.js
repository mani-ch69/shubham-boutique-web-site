const express = require('express');
const router = express.Router();
const { submitOrder, getUserOrders, getAllOrders } = require('../controllers/stitchingController');
const { auth, admin } = require('../middleware/auth');

router.post('/order', auth, submitOrder);
router.get('/my-orders', auth, getUserOrders);
router.get('/all', auth, admin, getAllOrders);

module.exports = router;
