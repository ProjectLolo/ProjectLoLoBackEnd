const FamilyMember = require("../../../models/Familymember");

const addMember = async (
  _,
  { memberInput: { kidId, userId, realtion, notification } }
) => {
  const user = await User.findOne({ userId: userId });
  if (user) {
    throw new Error("Family member exist!");
  }
  const familyMember = new FamilyMember({
    kidId,
    userId,
    realtion,
    notification,
  });
  const result = await familyMember.save();

  return { ...result._doc };
};

module.exports = { addMember };
