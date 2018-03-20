import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class Category extends Component {
  render() {
    const now = this.props.amount - this.props.balance;
    const percent = (now / this.props.amount) * 100;
    return (
      <div>
        <span><h3>{this.props.category}</h3><h5>Left ${this.props.balance}</h5></span>
        <ProgressBar now={now} label={`${percent}%`} />
      </div>
    );
  }
}