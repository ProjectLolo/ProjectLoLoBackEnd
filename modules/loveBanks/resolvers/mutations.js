const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");

const createLoveBank = async (
  _,
  { loveBankInput: { title, url, description, category, kidId } },
  context
) => {
  const user = checkAuth(context);
  console.log(kidId);
  try {
    const loveBank = new LoveBank({
      title,
      url,
      description,
      category,
      kidId,
      userId: user.userId,
    });

    const result = await loveBank.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = { createLoveBank };
