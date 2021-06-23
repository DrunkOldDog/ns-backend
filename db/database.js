const DATABASE = {};

module.exports = {
  findByEmail: async email => await new Promise(resolve => resolve(DATABASE[email])),
  setByEmail: async (email, amount) => new Promise(resolve => {
    console.log("creating: ", email, amount);
    DATABASE[email] = amount;
    resolve(amount);
  }),
};