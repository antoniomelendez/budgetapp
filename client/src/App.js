import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import PropTypes from 'prop-types';
import {graphql, QueryRenderer} from 'react-relay';
import Sidebar from './components/Sidebar';
import Content from './containers/Content';

const environment = require('./Environment');

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBudgetModal: false,
      showTransactionModal: false
    }
  }
  createBudgetModal = () => {
    this.setState({showBudgetModal: true});
  }
  createTransactionModal = () => {
    this.setState({showTransactionModal: true});
  }
  hideBudgetModal = () => {
    this.setState({showBudgetModal: false});
  }
  hideTransactionModal = () => {
    this.setState({showTransactionModal: false});
  }
  render() {
    return (
      <div className="App">
        <Sidebar 
          createBudgetModal={this.createBudgetModal} 
          createTransactionModal={this.createTransactionModal}
        />
        <Content 
          showBudgetModal={this.state.showBudgetModal} 
          showTransactionModal={this.state.showTransactionModal}
          hideBudgetModal={this.hideBudgetModal}
          hideTransactionModal={this.hideTransactionModal}
        />
      </div>
    );
  }
}

export default App;
