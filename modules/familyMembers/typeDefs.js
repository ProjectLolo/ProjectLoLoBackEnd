const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    familyMembers: [FamilyMember!]!
  }

  extend type Mutation {
    addMember(
      kidId: String!
      relation: String!
      notification: String!
    ): FamilyMember!
  }

  type FamilyMember {
    _id: ID!
    userId: String!
    relation: String!
    notification: String!
    kid: Kid!
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
