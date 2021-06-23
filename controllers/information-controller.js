const Information = require("../models/information");

const informationController = {};

informationController.findUserByEmail = (req, res) => {
  Information.findUserByEmail(req.query.email)
    .then((amount) => {
      if (!amount && amount !== 0) {
        return res.json({
          message: "User not found",
          isNew: true,
        });
      }

      res.json({
        message: `Returning ${req.query.email} account amount balance.`,
        amount,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = informationController;
