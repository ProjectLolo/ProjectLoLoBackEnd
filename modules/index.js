const { makeExecutableSchemaFromModules } = require('../utils/modules')

const auth = require('./auth')
const users = require('./users')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    
  ]
})