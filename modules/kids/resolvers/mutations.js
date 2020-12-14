const Kid = require("../../../models/Kid");
const FamilyMember = require("../../../models/FamilyMember");
const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");

const { AuthenticationError, UserInputError } = require("apollo-server");

const { generated } = require("../../../utils/generator");
const e = require("express");

const createKid = async (
  _,
  { kidInput: { name, nickName, birthdate, profileImageUrl } },
  context
) => {
  const user = checkAuth(context);
  const kidExisted = await Kid.find({ name: name, birthdate: birthdate });

  const code = await generated(5);

  try {
    if (!kidExisted[0]) {
      const kid = new Kid({
        name,
        nickName,
        birthdate,
        profileImageUrl,
        userId: user.userId,
        code,
        familyMembers: [],
      });

      const result = await kid.save();

      return { ...result._doc };
    } else {
      throw new UserInputError("Kid already exist");
    }
  } catch (err) {
    throw err;
  }
};

const deleteKid = async (
  _,
  {  kidId },
  context
) => {
  const user = checkAuth(context);
  const kidExisted = await Kid.findOne({_id: kidId});
  console.log("mutation", kidExisted)
  try {
    if (kidExisted) {
      console.log("mutation kid exists")
      await Kid.deleteOne({ _id: kidId })
      await FamilyMember.deleteMany({ kid: kidId })
      await LoveBank.deleteMany({ kidId: kidId })
      return `${kidExisted.name} deleted!`
      return 
    } else {
      throw new UserInputError("Kid not found");
    }
  } catch (err) {
    throw err;
  }
};

const addKidProfileImage = async (_, { id, imageUrl }, context) => {
  const user = checkAuth(context);

  try {
    if (!user) {
      console.log("User not authenticated!");
      throw new Error("User not authenticated");
    }

    if (!id) {
      console.log("Please provide kid Id");
      throw new Error("Please provide kid Id");
    }

    const kid = await Kid.findById(id);
    console.log("kidDate:", kid);

    if (!kid) {
      throw new Error(`Couldn’t find Kid with id ${id}`);
    }

    kid.profileImageUrl = imageUrl;
    console.log("updated:", kid);

    const result = await kid.save();

    return { ...result._doc };
  } catch (error) {
    console.log("addKidProfile mutation error:", error);
    throw error;
  }
};

const updateKidProfile = async (
  _,
  { id, name, nickName, birthdate, profileImageUrl },
  context
) => {
  const user = checkAuth(context);

  try {
    if (!user) {
      console.log("User not authenticated!");
      throw new Error("User not authenticated");
    }

    if (!id) {
      console.log("Please provide kid Id");
      throw new Error("Please provide kid Id");
    }

    const kid = await Kid.findById(id);
    console.log("kidDate:", kid);

    if (!kid) {
      throw new Error(`Couldn’t find Kid with id ${id}`);
    }

    (kid.name = name),
      (kid.nickName = nickName),
      (kid.birthdate = birthdate),
      (kid.profileImageUrl = profileImageUrl),
      console.log("updated:", kid);

    const result = await kid.save();

    return { ...result._doc };
  } catch (error) {
    console.log("updateKidProfile mutation error:", error);
    throw error;
  }
};

module.exports = { createKid, addKidProfileImage, updateKidProfile, deleteKid };
