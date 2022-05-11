import React from "react";
import { legacy_createStore as createStore } from "redux";
export function Counter() {
  // Reducer
  const counter = (state = 0, action: any) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  const store = createStore(counter);
  console.log(store.getState());
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "INCREMENT" });
  console.log(store.getState());
  store.dispatch({ type: "DECREMENT" });
  console.log(store.getState());

  // Logs: 0, 1, 2, 1

  return <div></div>;
}
