import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../styles/Transaction.css";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export const ALL_TRANSACTIONS = gql`
  query {
    allTransactions {
      category
      amount
      date
      vendor
      id
    }
  }
`;
class TransactionTable extends Component {
  render() {
    return (
      <div style={{ width: "80vw" }}>
        {!this.props.data.allTransactions ? (
          <h1>LOADING...</h1>
        ) : (
          <div style={{ width: "80vw" }}>
            <h1 style={{ textAlign: "center" }}>TRANSACTIONS</h1>
            <ReactTable
              data={this.props.data.allTransactions}
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
                }
              ]}
              className="-striped -highlight"
              style={{ width: "80vw" }}
            />
          </div>
        )}
      </div>
    );
  }
}
export const TransactionTableWithData = graphql(ALL_TRANSACTIONS)(
  TransactionTable
);
