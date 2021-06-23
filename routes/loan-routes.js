const express = require("express");

const loanRouter = express.Router();
const loanController = require("../controllers/loan-controller");

loanRouter.post("/", loanController.setUserLoan);

module.exports = loanRouter;
