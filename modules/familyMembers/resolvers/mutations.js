const FamilyMember = require("../../../models/Familymember");
const User = require("../../../models/User");

const addMember = async (
  _,
  { memberInput: { kidId, userId, relation, notification } }
) => {
  const user = await User.findOne({ userId: userId });
  if (user) {
    throw new Error("Family member exist!");
  }
  const familyMember = new FamilyMember({
    kidId,
    userId,
    relation,
    notification,
  });
  const result = await familyMember.save();

  return { ...result._doc };
};

module.exports = { addMember };
