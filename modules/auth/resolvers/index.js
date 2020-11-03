const login = require('./login')
const signup = require('./createUser')

const resolvers = {
  Query: {

  },
  Mutation: {
    login,
    signup
  }
}

module.exports = resolvers