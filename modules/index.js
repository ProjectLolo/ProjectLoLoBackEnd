const { makeExecutableSchemaFromModules } = require('../utils/modules')

const auth = require('./auth/typeDefs')
const users = require('./users')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    
  ]
})