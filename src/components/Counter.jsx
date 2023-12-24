import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [minLimit,setMinLimit] = useState(-10);
  const [maxLimit,setMaxLimit] = useState(10) ;

  //apply minimum and maximum limit functionality 
  // const minLimit = -10;
  // const maxLimit = 10;

  function increment() {
    if(count < maxLimit){
      setCount((c) => c + 1);
    }
  }

  function decrement() {
    if(count > minLimit){
      setCount((c) => c - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  const handleMinLimitChange = (e) => {
    setMinLimit((e.target.value));
  }

  const handleMaxLimitChange = (e) => {
    setMaxLimit((e.target.value));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-semibold mb-4 text-center">Counter App</h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <label htmlFor="minLimit">Min Limit:</label>
          <input
            type="number"
            id="minLimit"
            value={minLimit}
            onChange={handleMinLimitChange}
            className="px-2 py-1 border border-gray-300 rounded"
          />
          <label htmlFor="maxLimit">Max Limit:</label>
          <input
            type="number"
            id="maxLimit"
            value={maxLimit}
            onChange={handleMaxLimitChange}
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={increment}
            className="p-6 text-white bg-blue-500 hover:bg-blue-700 rounded text"
            disabled={count === maxLimit}
          >
            Increment
          </button>
          <p className="mb-6 text-center">Current count: {count}</p>
          <button
            onClick={decrement}
            className="p-6 text-white bg-blue-500 hover:bg-blue-700 rounded text"
            disabled={count === minLimit}
          >
            Decrement
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={reset}
            className="p-6 text-white bg-blue-500 hover:bg-blue-700 rounded text"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
