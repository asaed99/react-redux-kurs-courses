import React from "react";
// This is a dummy component without logic. It only define the position of each value/attribute
const App = ({ counts, decrement, increment }: any) => {
  return (
    <div>
      <h1>{counts}</h1>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};
export default App;
