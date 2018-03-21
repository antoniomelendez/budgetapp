const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const rootSchema = require("./rootSchema");
const cors = require("cors");
const app = express();

app.use(cors("*"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: rootSchema,
    graphiql: true
  })
);

app.listen(4000);
