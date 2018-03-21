const {
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList
} = require("graphql");

const Budget = require("./schemas/Budget.js");
const BudgetDB = require("../data/budgetDB.js");
const TransactionDB = require("../data/transactionDB.js");
const Transaction = require("./schemas/Transaction.js");

module.exports = new GraphQLObjectType({
  name: "Query",
  description: "...",

  fields: () => ({
    budget: {
      type: Budget,
      args: {
        category: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(source, args, context) {
        return BudgetDB.getBudgetByCategory(args.category);
      }
    },
    allBudgets: {
      type: GraphQLList(Budget),
      resolve() {
        return BudgetDB.getBudgets();
      }
    },
    transaction: {
      type: Transaction,
      args: {
        id: { type: GraphQLNonNull(GraphQLFloat) }
      },
      resolve(source, args, context) {
        return TransactionDB.getTransactionById(args.id);
      }
    },
    allTransactions: {
      type: GraphQLList(Transaction),
      resolve() {
        return TransactionDB.getTransactions();
      }
    }
  })
});
