import React from "react";
import "./ShowExpense.css";

function ShowExpense({ income, expense }) {
  return (
    <div className="card p-3 card-expense">
      <div className="first">
        <h5>Income</h5>
        <p className="text-success">${income}</p>
      </div>
      <div className="middle"></div>
      <div>
        <h5>Expense</h5>
        <p className="text-danger">${expense}</p>
      </div>
    </div>
  );
}

export default ShowExpense;
