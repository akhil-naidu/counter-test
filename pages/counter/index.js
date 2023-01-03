import React, { useReducer } from 'react';
import { ACTIONS, INITIAL_STATE } from '../../utils/initialstate';

const initialState = {
  count: INITIAL_STATE.COUNTER,
  input: INITIAL_STATE.NUMBER,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INC:
      return { ...state, count: state.count + state.input };

    case ACTIONS.DEC:
      return { ...state, count: state.count - state.input };

    case ACTIONS.INP:
      return { ...state, input: action.payload.number };

    default:
      state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter With useReducer</h1>
      <input
        type='number'
        placeholder='Enter the value'
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.INP,
            payload: { number: Number(e.target.value) },
          })
        }
      />

      <div style={{ display: 'flex', gap: 20 }}>
        <button onClick={() => dispatch({ type: ACTIONS.DEC })}>-</button>
        <div>{state.count}</div>
        <button onClick={() => dispatch({ type: ACTIONS.INC })}>+</button>
      </div>
    </div>
  );
};

export default Counter2;
