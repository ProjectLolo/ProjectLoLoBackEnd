const FamilyMember = require("../../../models/FamilyMember");
const { UserInputError } = require("apollo-server");
const Kid = require("../../../models/Kid");
const checkAuth = require("../../../utils/check-auth");

const addMember = async (_, { kidId, relation, notification }, context) => {
  const user = checkAuth(context);
  console.log("ID", user.userId);
  console.log("kidId", kidId);
  //"5fbaf6a40db0dc0c0ff23a5b" id user

  try {
    const member = await FamilyMember.find({ userId: user.userId, kid: kidId });

    if (member.length > 0) {
      throw new Error("cannot create duplicate familymember");
    }

    const familyMember = new FamilyMember({
      userId: user.userId,
      relation,
      notification,
      kid: kidId,
    });

    const result = await familyMember.save();

    const kidRecord = await Kid.findById(kidId);
    kidRecord.familyMembers.push(familyMember);
    await kidRecord.save();

    return { ...result._doc };
  } catch (error) {
    console.log(error);
  }
};

const deleteMember = async (
  _,
  {  _id },
  context
) => {
  const user = checkAuth(context);
  const familyMember = await FamilyMember.findOne({_id: _id});
  console.log("mutation", familyMember)
  try {
    if (familyMember) {
      console.log("mutation familyMember exists")
      await FamilyMember.deleteOne({ _id: _id })
      return `${familyMember._id} deleted!`
      return 
    } else {
      throw new UserInputError("FamilyMember not found");
    }
  } catch (err) {
    throw err;
  }
};
module.exports = { addMember, deleteMember };
