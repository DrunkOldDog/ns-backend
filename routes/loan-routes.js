const express = require('express');

const loanRouter = express.Router();
const loanController = require('../controllers/loan-controller');

loanRouter.post('/', loanController.setUserLoan);

// quoteRouter.get('/', quoteController.findAll);
// // Request single quote, send it to the /:id route
// quoteRouter.get('/:id', quoteController.findById);

module.exports = loanRouter;