import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
        <Nav className='sidebar'>
          <NavItem className='sidebar-item' onClick={this.props.createBudgetModal}>
            Create a budget
          </NavItem>
          <NavItem className='sidebar-item' onClick={this.props.createTransactionModal}>
            Create a transaction
          </NavItem>
          <NavItem className='sidebar-item' onClick={this.displayBudgets}>
            View all budgets
          </NavItem>
          <NavItem className='sidebar-item' onClick={this.displayTransactions}>
            View all transactions
          </NavItem>
        </Nav>
    );
  }
}
