const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Mutation {
    createKid(kidInput: KidInput): Kid
  }

  type Kid {
    _id: ID!
    name: String!
    nickName: String!
    birthdate: String!
    profileImageUrl: String
    userId: String!
    code: String!
  }
  input KidInput {
    name: String!
    nickName: String!
    birthdate: String!
    profileImageUrl: String
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
