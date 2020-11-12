const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Mutation {
    login(email: String!, password: String!): AuthData

    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      profilePic: String!
    ): User
    setting(
      email: String
      password: String
      firstName: String
      lastName: String
      profilePic: String
      nickName: String
    ): User
    addUserProfileImage(id: String!, imageUrl: String!): User!
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
    profilePic: String!
    token: String!
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
