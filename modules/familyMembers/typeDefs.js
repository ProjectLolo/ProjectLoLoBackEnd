const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Mutation {
    addMember(memberInput: MemberInput): FamilyMember
  }

  type FamilyMember {
    _id: ID!
    kidId: String!
    userId: String!
    relation: String!
    notification: String!
  }

  input MemberInput {
    kidId: String!
    userId: String!
    relation: String!
    notification: String!
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
