const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    nickName: String!
    profilePic: String!
    email: String!
    token: String!
    createdAt: String!
  }
  type Query {
    getUsers: User
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
