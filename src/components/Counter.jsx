import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-semibold mb-4 text-center">Counter App</h1>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={increment}
            className="p-6 text-white bg-blue-500 hover:bg-blue-700 rounded text"
          >
            Increment
          </button>
          <p className="mb-6 text-center">Current count: {count}</p>
          <button
            onClick={decrement}
            className="p-6 text-white bg-blue-500 hover:bg-blue-700 rounded text"
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
