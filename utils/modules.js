const { gql, makeExecutableSchema } = require("apollo-server");
const deepmerge = require("deepmerge");
const scalars = require("../scalars");

const globalTypeDefs = gql`
  type Query
  type Mutation
  type Subscription
`;

const makeExecutableSchemaFromModules = ({ modules }) => {
  let typeDefs = [globalTypeDefs, ...scalars.typeDefs];

  let resolvers = {
    ...scalars.resolvers,
  };

  modules.forEach((module) => {
    typeDefs = [...typeDefs, ...module.typeDefs];

    resolvers = deepmerge(resolvers, module.resolvers);
  });

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
};

module.exports = {
  makeExecutableSchemaFromModules,
};
