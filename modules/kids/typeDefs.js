const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    findKidById(kidId: String!): Kid!
    findAllKids(userId: String!): [Kid!]
    findKidByCode(code: String!): Kid!
  }

  extend type Mutation {
    createKid(kidInput: KidInput): Kid!
    addKidProfileImage(id: String!, imageUrl: String!): Kid
  }

  type Kid {
    _id: ID!
    name: String!
    nickName: String!
    birthdate: String!
    profileImageUrl: String
    userId: String!
    code: String
    familyMembers: [FamilyMember]
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
