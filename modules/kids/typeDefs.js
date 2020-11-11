const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    findKidById(kidId: String!): Kid!
    findAllKids(userId: String!): [Kid!]
  }

  extend type Mutation {
    createKid(kidInput: KidInput): Kid!
    addKidProfileImage(kidProfileImage: imageInput): Kid
  }

  input imageInput {
    id: String!
    imageUrl: String
  }

  type Kid {
    _id: ID!
    name: String!
    nickName: String!
    birthdate: String!
    profileImageUrl: String
    userId: String!
    code: String!
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
