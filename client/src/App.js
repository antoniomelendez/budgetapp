import React, { Component } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Content from "./containers/Content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBudgetModal: false,
      showTransactionModal: false,
      showTransactions: false
    };
  }

  showTransactions = () => {
    this.setState({ showTransactions: true });
  };
  hideTransactions = () => {
    this.setState({ showTransactions: false });
  };
  createBudgetModal = () => {
    this.setState({ showBudgetModal: true });
  };
  createTransactionModal = () => {
    this.setState({ showTransactionModal: true });
  };
  hideBudgetModal = () => {
    this.setState({ showBudgetModal: false });
  };
  hideTransactionModal = () => {
    this.setState({ showTransactionModal: false });
  };
  render() {
    return (
      <div className="App">
        <Sidebar
          createBudgetModal={this.createBudgetModal}
          createTransactionModal={this.createTransactionModal}
          showTransactions={this.showTransactions}
          hideTransactions={this.hideTransactions}
        />
        <Content
          showBudgetModal={this.state.showBudgetModal}
          showTransactionModal={this.state.showTransactionModal}
          hideBudgetModal={this.hideBudgetModal}
          hideTransactionModal={this.hideTransactionModal}
          showTransactions={this.state.showTransactions}
        />
      </div>
    );
  }
}

export default App;
