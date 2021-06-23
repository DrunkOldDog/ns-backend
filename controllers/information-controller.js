const Information = require('../models/information');

const informationController = {};

informationController.findUserByEmail = (req, res) => {
  Information.findUserByEmail(req.query.email)
    .then(balance => {
      if (!balance && balance !== 0) {
        return res.json({
          message: 'User not found',
          isNew: true
        });
      }

      res.json({
        message: 'Success',
        data: balance
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({err});
    });
};

module.exports = informationController;