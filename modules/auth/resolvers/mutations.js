const User = require("../../../models/User");
const bcrypt = require("bcrypt");
const { toJWT } = require("../../../utils/jwt");
const { SECRET_KEY, SALT_ROUNDS } = require("../../../config/constants");

const login = async (_, { email, password }) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("User does not exist!");
  }
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw new Error("Password is incorrect!");
  }
  const token = toJWT({ userId: user.id, email: user.email });
  return { user, token: token, tokenExpiration: 1 };
};

const signup = async (
  _,

  { firstName, lastName, password, email, profilePic }
) => {
  try {
    const existingUser = await User.findOne({ email: email });
    // if (existingUser) {
    //   throw new Error("User exists already.");
    // }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      profilePic,
    });

    const result = await user.save();
    const token = toJWT({ userId: result.id, email: user.email });

    return { ...result._doc, password: null, id: result.id, token };
  } catch (err) {
    throw err;
  }
};

module.exports = { login, signup };
