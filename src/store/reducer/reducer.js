import * as actionTypes from "../actions/actionTypes";
import { isPositive, numberfy } from "../../utility/index";

const initialState = {
  income: 0,
  expense: 0,
  history: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_RESULT:
      console.log(action.value);
      console.log(action.result);
      return {
        ...state,
        income: isPositive(action.value)
          ? state.income + numberfy(action.value)
          : state.income,
        expense: !isPositive(action.value)
          ? state.expense - numberfy(action.value)
          : state.expense,
        history: state.history.concat(action.result),
      };

    default:
      return { ...state };
  }
};

export default reducer;
