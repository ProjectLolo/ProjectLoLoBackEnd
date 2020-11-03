const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS } = require('../../../config/constants')

const User = require("../../../models/User");

const createUser = async (_, userInput) => {
    try {
      const existingUser = await User.findOne({ email: userInput.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, SALT_ROUNDS);

      const user = new User({
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        nickName: args.userInput.nickName,
        password: hashedPassword,
        email: args.userInput.email,
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  }

  module.exports = createUser
