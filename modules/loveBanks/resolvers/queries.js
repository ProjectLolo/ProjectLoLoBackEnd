const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");

const loveBanks = async (_) => {
  try {
    const loveBank = await LoveBank.find();

    return loveBank;
  } catch (err) {
    throw err;
  }
};

module.exports = { loveBanks };
