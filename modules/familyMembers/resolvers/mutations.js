const FamilyMember = require("../../../models/Familymember");
const User = require("../../../models/User");
const checkAuth = require("../../../utils/check-auth");

const addMember = async (
  _,
  { memberInput: { kidId, relation, notification } },
  context
) => {
  const user = checkAuth(context);

  const familyMember = new FamilyMember({
    kidId,
    userId: user.userId,
    relation,
    notification,
  });
  const result = await familyMember.save();

  return { ...result._doc };
};

module.exports = { addMember };
