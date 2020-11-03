const { makeExecutableSchemaFromModules } = require("../utils/modules");

const auth = require("./auth");
const kids = require("./kids/typeDefs");
const users = require("./users");

module.exports = makeExecutableSchemaFromModules({
  modules: [auth, kids],
});
