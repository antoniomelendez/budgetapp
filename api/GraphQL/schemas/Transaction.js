const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLFloat
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Transaction",
  description: "...",

  fields: () => ({
    id: {
      type: GraphQLFloat
    },
    category: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLFloat
    },
    date: {
      type: GraphQLString
    },
    vendor: {
      type: GraphQLString
    }
  })
});
