const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    loveBanks: [LoveBank!]!
  }

  extend type Mutation {
    createLoveBank(
      title: String!
      url: String!
      description: String!
      category: String!
      kidId: ID
    ): LoveBank
    createComment(loveBankId: String!, comment: String!): LoveBank
  }

  type LoveBank {
    _id: ID!
    title: String!
    url: String!
    description: String!
    category: String
    userId: ID
    comments: [Comment]!
    likes: [Like]
  }
  input LoveBankInput {
    title: String!
    url: String!
    description: String!
    category: String!
    kidId: ID
  }

  type Comment {
    userId: ID
    comment: String
    firstName: String
  }
  type Like {
    userId: ID
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
