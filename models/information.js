const db = require("../db/database");

const Information = {};

Information.findUserByEmail = async (email) => {
  return db.findByEmail(email);
}

Information.setUserBalanceByEmail = (email, amount) => {
  return db.setByEmail(email, amount);
}

module.exports = Information;