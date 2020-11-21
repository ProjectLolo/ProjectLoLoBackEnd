const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    loveBanks(kidId: ID): [LoveBank!]!
    loveBankById(_id: ID, kidId: ID): LoveBank!
  }

  extend type Mutation {
    createLoveBank(
      title: String!
      url: String!
      preview: String!
      type: String!
      description: String!
      category: String!
      kidId: ID
    ): LoveBank
    createComment(loveBankId: String!, comment: String!): LoveBank!
    likeLoveBank(loveBankId: String!): LoveBank!
    deleteLoveBank(loveBankId: String!): LoveBank!
  }

  type LoveBank {
    _id: ID!
    title: String!
    url: String!
    description: String!
    preview: String
    type: String
    category: String
    userId: ID!
    kidId: ID!
    comments: [Comment]!
    likes: [Like]
  }

  type Comment {
    _id: ID
    userId: ID
    comment: String
    firstName: String
    createdAt: String
  }
  type Like {
    userId: ID
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
