const { makeExecutableSchemaFromModules } = require("../utils/modules");

const auth = require('./auth/typeDefs')
const users = require('./users/typeDefs')
const kids = require("./kids/typeDefs")


module.exports = makeExecutableSchemaFromModules({
  modules: [auth, kids],
});
