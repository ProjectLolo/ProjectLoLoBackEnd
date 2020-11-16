const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const schema = require("./modules");
const checkAuth = require("./utils/check-auth");

const { MONGODB, PORT } = require("./config/constants");

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true,
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log("on connect", connectionParams.authorization);
      if (connectionParams.authorization) {
        const user = checkAuth(
          context,
          connectionParams.authorization,
          (sub = true)
        );
        return user;
      }
      throw new Error("Missing auth token!");
    },
    onDisconnect: (webSocket, context) => {
      console.log(
        new Date().toLocaleTimeString("de-DE"),
        "subscriptions:onDisconnect"
      );
    },
  },
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
