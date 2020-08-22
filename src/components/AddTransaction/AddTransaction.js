import React from "react";
import "./AddTransaction.css";

function AddTransaction({
  price,
  item,
  itemChange,
  priceChange,
  submitResult,
  disable,
}) {
  return (
    <div className="text-left">
      <h5>Add nex transaction</h5>
      <hr className="mb-4" />
      <div className="form-group">
        <label className="text-mute">Text</label>
        <input
          required
          type="text"
          className="form-control"
          value={item}
          onChange={itemChange}
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <p>(negative - expense, positive + income)</p>
        <input
          type="text"
          required
          className="form-control"
          value={price}
          onChange={(e) => priceChange(e)}
        />
        <button
          className="btn-block custom-btn mt-3"
          disabled={disable}
          onClick={submitResult}
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
