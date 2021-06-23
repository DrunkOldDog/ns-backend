const express = require('express');

const informationRouter = express.Router();
const informationController = require('../controllers/information-controller');

informationRouter.get('/', informationController.findUserByEmail);

module.exports = informationRouter;