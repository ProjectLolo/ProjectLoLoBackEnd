const User = require("../../../models/User");
const checkAuth = require("../../../utils/check-auth");
const { AuthenticationError, UserInputError } = require("apollo-server");

const findUserById = async (_, { id }, context) => {
  const { userId } = checkAuth(context);
  const user = await User.findById(id);
  if (user) {
    return user;
  } else {
    throw new UserInputError("User doesn't exist");
  }
};
module.exports = { findUserById };
