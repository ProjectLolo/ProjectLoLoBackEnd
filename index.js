const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const schema = require("./modules");

const { MONGODB, PORT } = require("./config/constants");

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }),
});

mongoose.connect(MONGODB, { useNewUrlParse: true }).then(() => {
  console.log("Mongo DB connected");
  return server.listen({ port: PORT }).then((res) => {
    console.log(`Server running at ${res.url}`);
  });
});
