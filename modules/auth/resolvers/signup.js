const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SALT_ROUNDS } = require('../../../config/constants')


const User = require("../../../models/User");

const createUser = async (_, { 
  signupInput: { 
    firstName, 
    lastName, 
    nickName, 
    password, 
    email}
}) => {
    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      firstName,
      lastName,
      nickName,
      password: hashedPassword,
      email,
    });

    const result = await user.save();

    return { ...result._doc, password: null, _id: result.id };
  } catch (err) {
    throw err;
  }
};

module.exports = createUser;
