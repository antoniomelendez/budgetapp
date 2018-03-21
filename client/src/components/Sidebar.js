import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import "../styles/Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <Nav className="sidebar">
        <NavItem
          className="sidebar-item"
          onClick={this.props.createBudgetModal}
        >
          Create A Budget
        </NavItem>
        <NavItem
          className="sidebar-item"
          onClick={this.props.createTransactionModal}
        >
          Create A Transaction
        </NavItem>
        <NavItem  
          className="sidebar-item"
          onClick={this.props.hideTransactions}
        >
          View All Budgets
        </NavItem>
        <NavItem 
          className="sidebar-item"
          onClick={this.props.showTransactions}
        >
          View All Transactions
        </NavItem>
      </Nav>
    );
  }
}
