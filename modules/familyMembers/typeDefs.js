const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Mutation {
    addMember(MemberInput: MemberInput): FamilyMember
  }

  type FamilyMember {
    id: ID!
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

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
