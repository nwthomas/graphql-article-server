const express = require("express");
const applyMiddleware = require("./middleware.js");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema.js");
const expressPlayground =
  require("graphql-playground-middleware-express").default;
const server = express();

// Configure middleware for server
applyMiddleware(server);

// Custom middleware replacement of Graphiql with GraphQL Playground
// Replaces GraphiQL as the IDE of choice for development
server.get("/playground", expressPlayground({ endpoint: "/graphql" }));

// Testing endpoint for if server is live
server.get("/", (req, res) => {
  res.send("The server is alive and well 🎉");
});

// Server use GraphQL with /graphql endpoint
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: false, // Turns off graphiql for GraphQL Playground use
  })
);

module.exports = server;
