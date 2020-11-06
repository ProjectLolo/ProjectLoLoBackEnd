const Kid = require("../../../models/Kid");
const checkAuth = require("../../../utils/check-auth");

const { generated } = require("../../../generator/codeGenerat");

const createKid = async (
  _,
  { kidInput: { name, nickName, birthdate, profileImageUrl } },
  context
) => {
  const user = checkAuth(context);

  try {
    const kid = new Kid({
      name,
      nickName,
      birthdate,
      profileImageUrl,
      userId: user.userId,

      code: generated(10),

      familyMembers: [],

    });

    const result = await kid.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = { createKid };
