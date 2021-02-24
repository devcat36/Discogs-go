const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const fs = require("fs");
const resolvers = require("./resolvers.js");
const { mocks } = require("./mocks.js");
const bodyParser = require("body-parser");
const { initDB } = require("./database.js");

const typeDefs = fs.readFileSync("./schema.graphql", "utf8").toString();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mockEntireSchema: false,
});

const app = express();
app.use(bodyParser.json());
app.use("/graphql", (req, res, next) => {
  // console.log(req.body.query);
  // console.log(req.body.variables);
  return next();
});
server.applyMiddleware({ app });
initDB();

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
