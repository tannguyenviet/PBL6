const router = require("express").Router();
const order = require("../app/controllers/order");
const ticket = require("../app/controllers/ticket");

router.post('/create_payment_url', order.createPaymentUrl);
router.get('/vnpay_return', order.returnPaymentUrl);
module.exports = router;