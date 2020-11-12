const User = require("../../../models/User");
const bcrypt = require("bcrypt");
const { toJWT } = require("../../../utils/jwt");
const { SECRET_KEY, SALT_ROUNDS } = require("../../../config/constants");
const checkAuth = require("../../../utils/check-auth");

const login = async (_, { email, password }) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("User does not exist!");
  }
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw new Error("Password is incorrect!");
  }
  const token = toJWT({
    userId: user.id,
    email: user.email,
    name: user.firstName,
  });
  return { user, token: token, tokenExpiration: 1 };
};

const signup = async (
  _,

  { firstName, lastName, password, email, profilePic }
) => {
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      throw new Error("User with that email already exists.");
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      profilePic,
    });

    const result = await user.save();
    const token = toJWT({
      userId: result.id,
      email: user.email,
      name: user.firstName,
    });

    return { ...result._doc, password: null, id: result.id, token };
  } catch (err) {
    throw err;
  }
};
const setting = async (
  _,
  { firstName, lastName, profilePic, nickName, password },
  context
) => {
  if (!firstName || !lastName || !password) {
    throw new Error("Please fill the form");
  }
  const { userId } = checkAuth(context);
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("user doesn't exist ");
  }
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await user.update({
    firstName,
    lastName,
    profilePic,
    nickName,
    password: hashedPassword,
  });

  return user;
};

const addUserProfileImage = async (_, { id, imageUrl }, context) => {
  const user = checkAuth(context);

  try {
    if (!user) {
      console.log("User not authenticated!");
      throw new Error("User not authenticated");
    }

    if (!id) {
      console.log("Please provide user Id");
      throw new Error("Please provide user Id");
    }

    const userFound = await User.findById(id);
    console.log("kidDate:", userFound);

    if (!userFound) {
      throw new Error(`Couldn’t find user with id ${id}`);
    }

    userFound.profilePic = imageUrl;
    console.log("updated:", userFound);

    const result = await userFound.save();

    return { ...result._doc, password: null };
  } catch (error) {
    console.log("addKidProfile mutation error:", error);
    throw error;
  }
};

module.exports = { login, signup, setting, addUserProfileImage };
