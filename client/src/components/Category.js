import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

export default class Category extends Component {
  render() {
    let total = this.props.amount - this.props.balance;
    let percent = total / this.props.amount * 100;
    return (
      <div>
        <span>
          <h3>{this.props.category}</h3>
          <h5>Left ${this.props.balance}</h5>
        </span>
        <ProgressBar
          now={total}
          max={this.props.amount}
          label={`${percent}%`}
        />
      </div>
    );
  }
}
