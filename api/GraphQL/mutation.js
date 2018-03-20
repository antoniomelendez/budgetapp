const {
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql');

const Budget = require('./schemas/Budget.js');
const BudgetDB = require('../data/budgetDB.js');
const TransactionDB = require('../data/transactionDB.js');
const Transaction = require('./schemas/Transaction.js');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  description: '...',
  fields: () => ({
    createBudget: {
      type: Budget,
      args: {
        category: { type: GraphQLNonNull(GraphQLString) },
        amount: { type: GraphQLNonNull(GraphQLFloat) },
      },
      resolve(source, args, context) {
        return BudgetDB.addNewBudget(args.category, args.amount);
      }
    },
    createTransaction: {
      type: Transaction,
      args: {
        category: { type: GraphQLNonNull(GraphQLString)},
        amount: {type: GraphQLNonNull(GraphQLFloat)},
        date: {type: GraphQLNonNull(GraphQLString)},
        vendor: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve(source, args, context) {
        return TransactionDB.addTransaction(args.category, args.amount, args.date, args.vendor);
      }
    }
  })
})