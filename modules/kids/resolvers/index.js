const mutations = require("./mutations");

const resolvers = {
  Query: {},
  Mutation: {
    ...mutations,
  },
};

module.exports = resolvers;
