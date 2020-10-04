import express from "express"
import { ApolloServer, gql } from'apollo-server-express';
import fs from "fs";
import resolvers from "./resolvers.mjs";

const typeDefs = fs.readFileSync("./schema.graphql", "utf8").toString();

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);