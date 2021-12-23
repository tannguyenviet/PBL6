const router = require("express").Router();
const order = require("../app/controllers/order");
const ticket = require("../app/controllers/ticket");
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author");
router.post('/create_payment_url', authen.authenticationToken, author.checkMemberRole, order.createPaymentUrl);
router.get('/vnpay_return', order.returnPaymentUrl);
module.exports = router;