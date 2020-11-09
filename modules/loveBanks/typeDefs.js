const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    loveBanks: [LoveBank!]!
  }

  extend type Mutation {
    createLoveBank(loveBankInput: LoveBankInput): LoveBank
  }

  type LoveBank {
    _id: ID!
    title: String!
    url: String!
    description: String!
    category: String
    userId: ID
    comment: [Comment]
    like: [Like]
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
  }
  type Like {
    userId: ID
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
