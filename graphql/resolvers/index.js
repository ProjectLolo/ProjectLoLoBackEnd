const userResolver = require("./auth");

const rootResolver = {
  ...authResolver,
};

module.exports = rootResolver;
