const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const schema = require("./modules");

const { MONGODB, PORT } = require("./config/constants");

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true,
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected");
    return server.listen({ port: PORT }).then((res) => {
      console.log(`Server running at ${res.url}`);
    });
  });
