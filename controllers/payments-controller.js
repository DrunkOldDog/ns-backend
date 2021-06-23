const Payments = require("../models/payments");
const Information = require("../models/information");

const paymentsController = {};

paymentsController.manageUserPayment = (req, res) => {
  const { email, amount } = req.body;

  // First, check if the user is already registered to the platform
  Information.findUserByEmail(email)
    .then((prevAmount) => {
      if (prevAmount !== undefined) {
        // If amount is greater than the debt we cannot accept the payment
        if (+prevAmount < +amount) {
          return res
            .status(500)
            .json({ error: "100", message: "Amount exceeds debt." });
        }

        // otherwise, allow user to pay his/her balance
        return Payments.manageUserPayment(email, +prevAmount - +amount).then(
          (newAmount) => {
            res.json({
              message: `Updated ${email} amount.`,
              amount: newAmount,
            });
          }
        );
      }

      // If the user is new, we cannot accept the payment
      res.status(500).json({ error: "101", message: "No Debt." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "500", message: err });
    });
};

module.exports = paymentsController;
