const { AuthenticationError, UserInputError } = require("apollo-server");
const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");
const { pubsub } = require("../../helper");

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

    // currently sending ALL comments associated to this loveBank back in subscription

    pubsub.publish("loveBank", {
      newComment: loveBank,
    });

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

module.exports = { createLoveBank, createComment, likeLoveBank };
