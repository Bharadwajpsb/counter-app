import React, { useState } from "react";
import "./App.css";

const initialState = 0;

const App = () => {
  // Declare state and initialize it to 0
  const [count, setCount] = useState(initialState);

  return (
    <div className="div1">
      <h1>Counter App</h1>
      <div className="div2">{count}</div>
      <div className='div3'>
        <button onClick={() => setCount(count + 1)}>➕</button>
        {/* <span></span> */}
        <button onClick={() => setCount(count - 1)}>➖</button>
      </div>
    </div>
  );
};

export default App;
