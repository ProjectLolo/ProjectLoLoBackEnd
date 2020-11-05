const Kid = require("../../../models/Kid");
const checkAuth = require("../../../utils/check-auth");

const createKid = async (
  _,
  { kidInput: { name, nickName, birthdate, profileImageUrl } },
  context
) => {
  const user = checkAuth(context);
  console.log(user);
  try {
    const kid = new Kid({
      name,
      nickName,
      birthdate,
      profileImageUrl,
      userId: user.userId,
    });

    const result = await kid.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = { createKid };
