const db = require("../db/database");

const Payments = {};

Payments.manageUserPayment = (email, amount) => {
  return db.setByEmail(email, amount);
};

module.exports = Payments;
