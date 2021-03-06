const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    findUserById(id: String!): User!
    
  }
  extend type Mutation {
    login(email: String!, password: String!): AuthData
    suggestion(suggestion: String!): String!

    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      profilePic: String!
    ): User
    setting(
      password: String!
      firstName: String!
      lastName: String!
      profilePic: String!
    ): User
    addUserProfileImage(id: String!, imageUrl: String!): User!
    forgotPassword(email: String): String
  }
  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }
  type User {
    _id: ID
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    profilePic: String!
    token: String
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
