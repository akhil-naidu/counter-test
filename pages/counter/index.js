import React, { useState } from 'react';
import { INITIAL_STATE } from '../../utils/initialstate';

const Counter = () => {
  const [counter, setCounter] = useState(INITIAL_STATE.COUNTER);
  const [number, setNumber] = useState(INITIAL_STATE.NUMBER);

  const increment = () => {
    setCounter((prev) => Number(prev) + Number(number));
  };
  const decrement = () => {
    setCounter((prev) => Number(prev) - Number(number));
  };
  return (
    <div>
      <h1>Counter With useState</h1>
      <input
        type='number'
        placeholder='Enter the value'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div style={{ display: 'flex', gap: 20 }}>
        <button onClick={() => decrement()}>-</button>
        <div>{counter}</div>
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
};

export default Counter;
