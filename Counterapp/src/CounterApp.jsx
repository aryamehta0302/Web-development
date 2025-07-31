import React, { useState } from 'react';

// The main component for the counter application
export default function CounterApp() {
  const [count, setCount] = useState(0);

  // Handler functions for updating the state
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>React Counter</h1>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
}