import React from "react";
import "./ExpenseHistory.css";

function ExpenseHistory({ hist = [] }) {
  let history = <p className="text-secondary">No history to show</p>;
  if (hist.length) {
    history = hist.map((res) => {
      let bor = res.price > 0 ? "green" : "red";
      return (
        <p className={"display-history " + bor} key={res.id}>
          <span>{res.item}</span>
          <span>{res.price}</span>
        </p>
      );
    });
  }
  return (
    <div className="text-left">
      <h5>History</h5>
      <hr className="mb-4" />
      {history}
    </div>
  );
}

export default ExpenseHistory;
