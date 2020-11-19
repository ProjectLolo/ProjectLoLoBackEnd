const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");

const loveBanks = async (_, { kidId }, context) => {
  try {
    const { userId } = checkAuth(context);
    const loveBank = await LoveBank.find({
      kidId: kidId,
    });
    return loveBank;
  } catch (err) {
    throw err;
  }
};

const loveBankById = async (_, { _id, kidId }, context) => {
  try {
    const { userId } = checkAuth(context);

    const loveBank = await LoveBank.findById(_id);
    if ((loveBank.kidId != kidId) & (loveBank.userId != userId)) {
      throw new Error("User doesn't access to the lovebank");
    }

    console.log(loveBank);
    return loveBank;
  } catch (err) {
    throw err;
  }
};
module.exports = { loveBanks, loveBankById };
