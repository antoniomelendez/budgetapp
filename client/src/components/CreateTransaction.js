import React, { Component } from 'react';
import { Modal, Button, form } from 'react-bootstrap';
import './styles/Sidebar.css';

export default class CreateTransaction extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      category: '',
      date: '',
      vendor: ''
    }
  }
  handleAmountChange = (event) => {
    this.setState({amount: event.target.value});
  }
  handleDateChange = (event) => {
    this.setState({date: event.target.value});
  }
  handleVendorChange = (event) => {
    this.setState({vendor: event.target.value});
  }
  handleCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <Modal className="modal" show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Create Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input value={this.state.date} onChange={this.handleDateChange}type="text" placeholder="date"/>
              <input value={this.state.vendor} onChange={this.handleVendorChange}type="text" placeholder="vendor"/>
              <input value={this.state.amount} onChange={this.handleAmountChange}type="text" placeholder="amount"/>
              <input value={this.state.category} onChange={this.handleCategoryChange}type="text" placeholder="category"/>
              <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}