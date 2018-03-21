import React, { Component } from "react";
import { CreateBudgetWithData } from "../components/CreateBudget";
import { CreateTransactionWithData } from "../components/CreateTransaction";
import { AllCategoriesWithData } from "../components/AllCategories";
import { TransactionTableWithData } from "../components/TransactionTable";
import "../styles/Content.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        {this.props.showTransactions ? (
          <div className="content">
            <TransactionTableWithData />
            <CreateBudgetWithData
              show={this.props.showBudgetModal}
              closeModal={this.props.hideBudgetModal}
            />
            <CreateTransactionWithData
              show={this.props.showTransactionModal}
              closeModal={this.props.hideTransactionModal}
            />
          </div>
        ) : (
          <div className="content">
            <AllCategoriesWithData />
            <CreateBudgetWithData
              show={this.props.showBudgetModal}
              closeModal={this.props.hideBudgetModal}
            />
            <CreateTransactionWithData
              show={this.props.showTransactionModal}
              closeModal={this.props.hideTransactionModal}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Content;
