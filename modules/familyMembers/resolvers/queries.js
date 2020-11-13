const FamilyMember = require("../../../models/FamilyMember");

const findKidBelongsToMember = async (_, userId) => {
  const member = await FamilyMember.find(userId).populate("kid");

  console.log("test", member);

  const result = member.map((kid) => {
    return kid.kid;
  });

  return result;
};

module.exports = { findKidBelongsToMember };
