const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    me: User @isAuthenticated
  }

  extend type Mutation {
    login(loginInput: LoginInput): AuthData
    signup(signupInput: SignupInput): User
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
    nickName: String!
  }
  input SignupInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    nickName: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;


module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};