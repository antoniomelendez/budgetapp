const {
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Budget',
  description: '...',

  fields: () => ({
    category: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLFloat,
    },
    balance: {
      type: GraphQLFloat
    },
  })
});

