import React, { Component } from "react";
import { Modal, Button, form } from "react-bootstrap";
import "./styles/Sidebar.css";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { ALL_BUDGETS } from "./AllCategories";

const CREATE_BUDGET = gql`
  mutation($category: String!, $amount: Float!) {
    createBudget(category: $category, amount: $amount) {
      category
      amount
      balance
    }
  }
`;

class CreateBudget extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      category: ""
    };
  }
  handleAmountChange = event => {
    this.setState({ amount: event.target.value });
  };
  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("CREATEBUDGET PROPS", this.props);
    this.props
      .mutate({
        variables: { category: this.state.category, amount: this.state.amount }
      })
      .then(({ data }) => {
        console.log("got data", data);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
    this.setState({ amount: 0, category: "" });
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
            <Modal.Title>Create Budget</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input
                value={this.state.amount}
                onChange={this.handleAmountChange}
                type="number"
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

export const CreateBudgetWithData = graphql(CREATE_BUDGET, {
  options: { refetchQueries: [{ query: ALL_BUDGETS }] }
})(CreateBudget);
