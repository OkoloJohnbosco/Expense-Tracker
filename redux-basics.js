const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
// The reducer takes two argument The first is the curent
//  state while the 2nd is the action the fxn has to return the updated state

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store
// Create store wont do much the way it is createStore()
// It has to be initilized with a reducer because the reducer is strongly
// connected to the store its the only thing that may updated the state in the app

const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log("Subscription", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });

// console.log(store.getState());
