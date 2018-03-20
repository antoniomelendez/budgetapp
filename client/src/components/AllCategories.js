import React, { Component } from 'react';
import Category from './Category';
import '../styles/Category.css';
const data = [
  {
    "category": "Entertainment",
    "amount": 100,
    "balance": 85
  },
  {
    "category": "Gas",
    "amount": 200,
    "balance": 20
  },
  {
    "category": "Groceries",
    "amount": 400,
    "balance": 2
  },
];
export default class AllCategories extends Component {
  render() {
    return (
      <div className="categories">
        {data.map(budget => <Category category={budget.category} amount={budget.amount} balance={budget.balance} />)}
      </div>
    )
  }
}