import React, { useState } from "react";
import ExpenseBalance from "../../components/ExpenseBalance/ExpenseBalance";
import styles from "./ExpenseTracker.module.css";
import ShowExpense from "../../components/ShowExpense/ShowExpense";
import ExpenseHistory from "../../components/ExpenseHistory/ExpenseHistory";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { connect } from "react-redux";
import { saveResult } from "../../store/actions/actionCreators";
import { numberfy, validate } from "../../utility/index";

function ExpenseTracker({ inc, exp, history, onSubmitResult }) {
  const [price, setPrice] = useState("-50");
  const [item, setItem] = useState("Car Repairs");

  const bal = numberfy(inc) - numberfy(exp);
  return (
    <div className="container text-secondary">
      <div className={styles.Wrapper}>
        <p className="h5 mt-2">Expense Tracker</p>
        <ExpenseBalance balance={bal} />
        <ShowExpense income={inc} expense={exp} />
        <ExpenseHistory hist={history} />
        <AddTransaction
          price={price}
          item={item}
          itemChange={(e) => setItem(e.target.value)}
          priceChange={(e) => setPrice(e.target.value)}
          submitResult={() => {
            onSubmitResult(price, item);
            setPrice("");
            setItem("");
          }}
          disable={!validate(item, price)}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inc: state.income,
    exp: state.expense,
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitResult: (price, item) => dispatch(saveResult(price, item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
