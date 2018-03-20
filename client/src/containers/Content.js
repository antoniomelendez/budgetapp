import React, { Component } from 'react';
import CreateBudget from '../components/CreateBudget';
import CreateTransaction from '../components/CreateTransaction';
import AllCategories from '../components/AllCategories';
import TransactionTable from '../components/TransactionTable';
import '../styles/Content.css';
import gql from 'graphql-tag';
import { graphql, Mutation } from 'react-apollo';

const CREATE_BUDGET = gql`
  mutation {
    createBudget(category: String!, amount: Float!) {
      category
      amount
      balance
    }
  }
`
const CREATE_TRANSACTION = gql`
  mutation {
    createTransaction(category: String!, amount: Float!, date: String!, vendor: String!) {
      category
      amount
      date
      vendor
      id
    }
  }
`

class Content extends Component {
  render() {
      return (
        <div className="content">
          <TransactionTable />
          <CreateBudget 
            show={this.props.showBudgetModal}
            closeModal={this.props.hideBudgetModal}

          />
          <CreateTransaction 
            show={this.props.showTransactionModal}
            closeModal={this.props.hideTransactionModal}
          />
        </div>
      )
  }
}

export default Content;