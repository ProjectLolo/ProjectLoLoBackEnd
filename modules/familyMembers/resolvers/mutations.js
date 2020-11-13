const FamilyMember = require("../../../models/FamilyMember");
const Kid = require("../../../models/Kid");
const checkAuth = require("../../../utils/check-auth");


const addMember = async (
  _,
   { kidId, relation, notification } ,
  context
) => {

  const user = checkAuth(context);

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
};

module.exports = { addMember };
