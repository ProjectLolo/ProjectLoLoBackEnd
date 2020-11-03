const Kid = require("../../../models/Kid");

const createKid = async (
  _,
  { kidInput: { name, nickName, birthdate, profileImageUrl, userId } }
) => {
  try {
    const kid = new Kid({
      name,
      nickName,
      birthdate,
      profileImageUrl,
      userId,
    });

    const result = await kid.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = { createKid };
