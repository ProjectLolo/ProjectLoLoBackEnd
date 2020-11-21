const { AuthenticationError, UserInputError } = require("apollo-server");
const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");

const createLoveBank = async (
  _,
  { title, url, preview, description, category, type, kidId },
  context
) => {
  const user = checkAuth(context);

  try {
    const loveBank = new LoveBank({
      title,
      url,
      description,
      type,
      category,
      kidId,
      preview,
      userId: user.userId,
    });

    const result = await loveBank.save();

    return { ...result._doc, user };
  } catch (err) {
    throw err;
  }
};

const createComment = async (_, { comment, loveBankId }, context) => {
  const { userId, name } = checkAuth(context);
  console.log("NAME????", name);
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
      firstName: name,
      createdAt: new Date().toISOString(),
    });
    await loveBank.save();

    console.log(loveBank);
    return loveBank;
  } else throw new UserInputError("Post not found");
};
const likeLoveBank = async (_, { loveBankId }, context) => {
  const { userId } = checkAuth(context);

  const loveBank = await LoveBank.findById(loveBankId);
  if (loveBank) {
    if (loveBank.likes.find((like) => like.userId == userId)) {
      // Post already likes, unlike it
      loveBank.likes = loveBank.likes.filter((like) => like.userId != userId);
    } else {
      // Not liked, like loveBank
      loveBank.likes.push({
        userId,
        createdAt: new Date().toISOString(),
      });
    }

    await loveBank.save();
    return loveBank;
  } else throw new UserInputError("loveBank not found");
};

const deleteLoveBank = async (_, { loveBankId }, context) => {
  const user = checkAuth(context);

  try {
    const loveBank = await LoveBank.findById(loveBankId);

    if (loveBank) {
      const lovebankIdString = loveBank.userId.toString();

      if (lovebankIdString !== user.userId) {
        throw new Error(`Cannot complete the request`);
      } else {
        const deletedLovebank = await LoveBank.findByIdAndDelete(loveBankId);
        return deletedLovebank;
      }
    } else {
      throw new Error(`Couldn’t find content with that id`);
    }
  } catch (error) {
    console.log("Delete lovebank mutation error:", error);
    throw error;
  }
};

module.exports = {
  createLoveBank,
  createComment,
  likeLoveBank,
  deleteLoveBank,
};
