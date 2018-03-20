import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Transaction from './Transaction';
import '../styles/Transaction.css';
const allTransactions = [
  {
    "category": "Entertainment",
    "amount": 15,
    "date": "1/4/18",
    "vendor": "Utah Jazz",
    "id": 1521502897816
  },
  {
    "category": "Entertainment",
    "amount": 11,
    "date": "1/4/18",
    "vendor": "Utes",
    "id": 1521502910923
  },
  {
    "category": "Entertainment",
    "amount": 20,
    "date": "1/4/18",
    "vendor": "Megaplex",
    "id": 1521502924295
  }
];
export default class TransactionTable extends Component {

  render() {
    return (
      <div style={{width: "80vw"}}>
      <h1 style={{textAlign: "center"}}>TRANSACTIONS</h1>
      <ReactTable
      data={allTransactions}
      columns={[
        {
          Header: "ID",
          columns: [
            {
              accessor: "id"
            }
          ]
        },
        {
          Header: "Vendor",
          columns: [
            {
              accessor: "vendor"
            }
          ]
        },
        {
          Header: "Amount",
          columns: [
            {
              accessor: "amount"
            }
          ]
        },
        {
          Header: "Category",
          columns: [
            {
              accessor: "category"
            }
          ]
        },
      ]}
      className="-striped -highlight"
      style={{width: "80vw"}}
    />
    </div>
    );
  }
}