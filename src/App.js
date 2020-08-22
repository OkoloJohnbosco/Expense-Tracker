import React, { Component } from "react";

import ExpenseTracker from "./containers/ExpenseTracker/ExpenseTracker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseTracker />
      </div>
    );
  }
}

export default App;
