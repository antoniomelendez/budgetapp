const budgets = {};
const transactions = require("./transactionDB.js");

exports._adjustBudgetByCategory = ({ category, amount }) => {
  const budget = budgets[category];
  budget.balance = budget.balance - amount;
};

exports._respondToTransaction = transaction => {
  if (budgets[transaction.category]) {
    exports._adjustBudgetByCategory(transaction);
  }
};

transactions.on("transaction.added", exports._respondToTransaction);

exports.addNewBudget = (category, amount) => {
  const newBudget = {
    amount,
    balance: amount,
    category
  };
  budgets[category] = newBudget;
  return budgets[category];
};

exports.getBudgetByCategory = category => {
  return budgets[category];
};

exports.getBudgets = () => {
  return Object.keys(budgets).map(key => budgets[key]);
};
