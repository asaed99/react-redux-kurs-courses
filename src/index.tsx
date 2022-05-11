import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { legacy_createStore as createStore } from "redux";

const container = document.getElementById("root")!;
const root = createRoot(container);
// To create a redux store you need to create a reducer function.
// In this case the Reducer function is counter(). It specify the actions and
//  whats their return type
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
// To create a store you can import createStore from redux which is actually decprecated
//  and only for study purposes. configureStore is the new method and needs redux toolkit to be installed
// The Reducer contains the current and every action change that is triggerd
//  You pass the reducer function here "counter" to the createStore/configureStore function
const store = createStore(counter);

const currentState = () => {
  root.render(
    <React.StrictMode>
      <App
        counts={store.getState()}
        increment={() => store.dispatch({ type: "INCREMENT" })}
        decrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </React.StrictMode>
  );
};
currentState();
//  The subscribe function is used to update the snapshot of the state taken by redux through
//  dispatching a fn.
store.subscribe(currentState);
console.log(store.getState);

reportWebVitals();
