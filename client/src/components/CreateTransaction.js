import React, { Component } from "react";
import { Modal, Button, form } from "react-bootstrap";
import "../styles/Sidebar.css";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { ALL_TRANSACTIONS } from "./TransactionTable";
import { ALL_BUDGETS } from "./AllCategories";

const CREATE_TRANSACTION = gql`
  mutation(
    $category: String!
    $amount: Float!
    $date: String!
    $vendor: String!
  ) {
    createTransaction(
      category: $category
      amount: $amount
      date: $date
      vendor: $vendor
    ) {
      category
      amount
      date
      vendor
      id
    }
  }
`;

class CreateTransaction extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      category: "",
      date: "",
      vendor: ""
    };
  }
  handleAmountChange = event => {
    this.setState({ amount: event.target.value });
  };
  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };
  handleVendorChange = event => {
    this.setState({ vendor: event.target.value });
  };
  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          category: this.state.category,
          amount: this.state.amount,
          date: this.state.date,
          vendor: this.state.vendor
        }
      })
      .then(({ data }) => {
        console.log("got data", data);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
    this.setState({ amount: 0, category: "", vendor: "", date: "" });
  };
  render() {
    return (
      <Modal
        className="modal"
        show={this.props.show}
        onHide={this.props.closeModal}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Create Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input
                value={this.state.date}
                onChange={this.handleDateChange}
                type="text"
                placeholder="date"
              />
              <input
                value={this.state.vendor}
                onChange={this.handleVendorChange}
                type="text"
                placeholder="vendor"
              />
              <input
                value={this.state.amount}
                onChange={this.handleAmountChange}
                type="text"
                placeholder="amount"
              />
              <input
                value={this.state.category}
                onChange={this.handleCategoryChange}
                type="text"
                placeholder="category"
              />
              <Button type="submit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export const CreateTransactionWithData = graphql(CREATE_TRANSACTION, {
  options: {
    refetchQueries: [{ query: ALL_TRANSACTIONS }, { query: ALL_BUDGETS }]
  }
})(CreateTransaction);
