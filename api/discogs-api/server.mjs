import express from "express";
import { ApolloServer } from "apollo-server-express";
import fs from "fs";
import resolvers from "./resolvers.mjs";
import { mocks } from "./mocks.mjs";
import bodyParser from "body-parser";

const typeDefs = fs.readFileSync("./schema.graphql", "utf8").toString();

const server = new ApolloServer({ typeDefs, resolvers, mocks });

const app = express();
app.use(bodyParser.json());
app.use("/graphql", (req, res, next) => {
  console.log(req.body.query);
  console.log(req.body.variables);
  return next();
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
