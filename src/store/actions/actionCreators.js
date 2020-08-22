import * as actionTypes from "./actionTypes";

export const saveResult = (price, item) => {
  return {
    type: actionTypes.SUBMIT_RESULT,
    value: price,
    result: { id: Date.now(), price, item },
  };
};
