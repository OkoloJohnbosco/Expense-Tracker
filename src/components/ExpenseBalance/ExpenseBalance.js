import React from "react";
import { numberfy, makePositive } from "../../utility/index";

function ExpenseBalance({ balance }) {
  let mainBal = numberfy(balance);
  let balClass = mainBal > 0 ? "text-success" : "text-danger";
  if (mainBal === 0) balClass = "text-dark";
  let shownBal = mainBal < 0 ? makePositive(mainBal) : mainBal;

  return (
    <div className="text-left mt-4">
      <h5>
        <strong>Your Balance</strong>
      </h5>
      <h4 className={balClass}>${shownBal}</h4>
    </div>
  );
}

export default ExpenseBalance;
