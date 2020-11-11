const Kid = require("../../../models/Kid");
const checkAuth = require("../../../utils/check-auth");

const { generated } = require("../../../utils/generator");
const e = require("express");

const createKid = async (
  _,
  { kidInput: { name, nickName, birthdate, profileImageUrl } },
  context
) => {
  const user = checkAuth(context);

  const code = await generated(10);
  // console.log("code", code);
  try {
    const kid = new Kid({
      name,
      nickName,
      birthdate,
      profileImageUrl,
      userId: user.userId,
      code,
      familyMembers: [],
    });

    const result = await kid.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = { createKid };
