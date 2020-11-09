const Kid = require("../../../models/Kid");

const findKidById = async (_, { kidId }) => {
  const result = await Kid.findById(kidId).populate("familyMembers");
  return result._doc;
};

module.exports = { findKidById };
