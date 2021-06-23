const Loan = require("../models/loan");
const Information = require("../models/information");

const loanController = {};

loanController.setUserLoan = (req, res) => {
  const { email, amount } = req.body;

  // First, check if the user is already registered to the platform
  Information.findUserByEmail(email)
    .then((prevAmount) => {
      if (prevAmount !== undefined) {
        // if the loan sum exceeded don't allow to take a new loan
        if (+prevAmount + +amount > 1000) {
          return res
            .status(500)
            .json({ error: "100", message: "Amount exceeded" });
        }

        // otherwise, allow user to take a new loan
        return Loan.setUserLoan(email, +prevAmount + +amount).then(
          (newAmount) => {
            res.json({
              message: `Updated ${email} amount.`,
              amount: newAmount,
            });
          }
        );
      }

      // if not registered check if the loan amount exceeds the allowing value
      if (amount > 50) {
        return res
          .status(500)
          .json({ error: "101", message: "First Amount exceeded" });
      }

      // otherwise, create the user with the new loan
      Loan.setUserLoan(email, +amount).then(() =>
        res.json({
          message: `Created ${email} with a ${amount} loan.`,
          amount: +amount,
        })
      );
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "500", message: err });
    });
};

module.exports = loanController;
