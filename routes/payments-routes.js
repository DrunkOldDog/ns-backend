const express = require("express");

const paymentsRouter = express.Router();
const paymentsController = require("../controllers/payments-controller");

paymentsRouter.post("/", paymentsController.manageUserPayment);

module.exports = paymentsRouter;
