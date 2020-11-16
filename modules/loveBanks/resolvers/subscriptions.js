const { withFilter } = require("apollo-server");
const LoveBank = require("../../../models/LoveBank");
const checkAuth = require("../../../utils/check-auth");
const FamilyMembers = require("../../familyMembers/resolvers");
const { pubsub } = require("../../helper");

const newComment = {
  subscribe: () => pubsub.asyncIterator("loveBank"),
};

module.exports = { newComment };
