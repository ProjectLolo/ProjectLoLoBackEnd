const { AuthenticationError, UserInputError } = require("apollo-server");
const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");

const createLoveBank = async (
  _,
  { title, url, description, category, kidId },
  context
) => {
  const user = checkAuth(context);

  try {
    const loveBank = new LoveBank({
      title,
      url,
      description,
      category,
      kidId,
      userId: user.userId,
    });

    const result = await loveBank.save();

    return { ...result._doc, user };
  } catch (err) {
    throw err;
  }
};

const createComment = async (_, { comment, loveBankId }, context) => {
  const { userId, firstName } = checkAuth(context);
  if (comment.trim() === "") {
    throw new UserInputError("Empty comment", {
      errors: {
        comment: "Comment body must not empty",
      },
    });
  }

  const loveBank = await LoveBank.findById(loveBankId);

  if (loveBank) {
    loveBank.comments.unshift({
      comment,
      userId,
      firstName,
      createdAt: new Date().toISOString(),
    });
    await loveBank.save();

    console.log(loveBank);
    return loveBank;
  } else throw new UserInputError("Post not found");
};

module.exports = { createLoveBank, createComment };
