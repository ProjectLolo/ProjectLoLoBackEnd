const Kid = require("../../../models/Kid");

const findKidById = async (_, { kidId }) => {
  const result = await Kid.findById(kidId).populate("familyMembers");
  return result._doc;
};

const findAllKids = async (_, { userId }) => {
  console.log("do i get here");
  const result = await Kid.find({ userId: userId });
  console.log("result", result);
  return result;
};

module.exports = { findKidById, findAllKids };
