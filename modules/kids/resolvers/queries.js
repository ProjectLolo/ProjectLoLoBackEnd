const Kid = require("../../../models/Kid");
const FamilyMember = require("../../../models/FamilyMember");
const checkAuth = require("../../../utils/check-auth");
const { AuthenticationError, UserInputError } = require("apollo-server");

const findKidById = async (_, { kidId }) => {
  const result = await Kid.findById(kidId).populate("familyMembers");
  return result._doc;
};

const findAllKids = async (_, userId) => {
  const kids = await Kid.find(userId);

  const member = await FamilyMember.find(userId).populate("kid");

  const kidMembers = member.map((kid) => {
    return kid.kid;
  });

  const result = [].concat(kids, kidMembers);

  return result;
};

const findKidByCode = async (_, { code }, context) => {
  const { userId } = checkAuth(context);
  const result = await Kid.find({ code: code });
  if (code.trim() === "") {
    throw new UserInputError("Empty field", {
      errors: {
        comment: "Enter the correct code",
      },
    });
  }
  if (result[0]) {
    return result[0];
  } else throw new UserInputError("Wrong code");
};

module.exports = { findKidById, findAllKids, findKidByCode };
