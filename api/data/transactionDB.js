const EventEmitter = require("events");

class Transactions extends EventEmitter {
  constructor() {
    super();
    this.transactions = {};
  }
  addTransaction(category, amount, date, vendor) {
    const id = Date.now();
    const transaction = {
      id,
      category,
      amount,
      date,
      vendor
    };
    this.transactions[id] = transaction;
    this.emit("transaction.added", transaction);
    return this.transactions[id];
  }
  getTransactionById(id) {
    return this.transactions[id];
  }
  getTransactions() {
    return Object.keys(this.transactions).map(key => this.transactions[key]);
  }
}

module.exports = new Transactions();
