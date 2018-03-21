const { GraphQLSchema } = require("graphql");

const mutations = require("./mutation");
const queries = require("./query");

module.exports = new GraphQLSchema({
  mutation: mutations,
  query: queries
});
