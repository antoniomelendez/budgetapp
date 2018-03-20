import React, { Component } from 'react';
import { Modal, Button, form } from 'react-bootstrap';
import './styles/Sidebar.css';


class CreateBudget extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      category: ''
    }
  }
  handleAmountChange = (event) => {
    this.setState({amount: event.target.value});
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
            <Modal.Title>Create Budget</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input value={this.state.amount} onChange={this.handleAmountChange} type="text" placeholder="amount"/>
              <input value={this.state.category} onChange={this.handleCategoryChange} type="text" placeholder="category"/>
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

export default CreateBudget;