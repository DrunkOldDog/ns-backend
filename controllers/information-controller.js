const Information = require("../models/information");

const informationController = {};

informationController.findUserByEmail = (req, res) => {
  Information.findUserByEmail(req.query.email)
    .then((amount) => {
      if (!amount && amount !== 0) {
        return res.json({
          message: `Incoming new user ${req.query.email}`,
          isNew: true,
        });
      }

      res.json({
        message: `Returning ${req.query.email} account amount balance.`,
        amount,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "500", message: err });
    });
};

module.exports = informationController;
