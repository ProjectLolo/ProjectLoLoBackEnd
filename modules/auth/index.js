
const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    me: User @isAuthenticated
  }
  
  extend type Mutation {
    login(
      email: String!,
      password: String!
    ): AuthData
    signup(
      email: String!,
      password: String!,
      firstName: String!,
      lastName: String!,
      nickName:String!
    ): User
  }
  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }
  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }
`

const resolvers = require('./resolvers')

module.exports = {
  typeDefs: [
    typeDefs
  ],
  resolvers
}