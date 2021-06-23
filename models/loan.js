const db = require("../db/database");

const Loan = {};

Loan.setUserLoan = async (email, amount) => {
  return db.setByEmail(email, amount);
}

module.exports = Loan;