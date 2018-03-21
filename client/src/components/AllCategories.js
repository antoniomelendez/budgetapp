import React, { Component } from "react";
import Category from "./Category";
import "../styles/Category.css";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export const ALL_BUDGETS = gql`
  query {
    allBudgets {
      category
      amount
      balance
    }
  }
`;
class AllCategories extends Component {
  render() {
    console.log("CATEGORY PROPS", this.props.data);
    return (
      <div className="categories">
        {this.props.data.allBudgets ? (
          <div className="categories">
            {this.props.data.allBudgets.map(budget => (
              <Category
                key={budget.category}
                category={budget.category}
                amount={budget.amount}
                balance={budget.balance}
              />
            ))}
          </div>
        ) : (
          <h3 className="categories">Please Create Some Budgets</h3>
        )}
      </div>
    );
  }
}

export const AllCategoriesWithData = graphql(ALL_BUDGETS)(AllCategories);
