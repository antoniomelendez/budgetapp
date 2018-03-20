const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const rootSchema = require('./rootSchema');

const app = express();
console.log(graphql.printSchema(rootSchema));
app.use('/graphql', graphqlHTTP({
  schema: rootSchema,
  graphiql: true,

}));

app.listen(4000);