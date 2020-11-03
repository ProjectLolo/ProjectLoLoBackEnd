const { gql } = require("apollo-server")

module.exports = gql`
    type User {
        id: ID!,
        firstName: String!,
        lastName: String!,
        nickName: String!,
        createdAt: String!,
    }
`