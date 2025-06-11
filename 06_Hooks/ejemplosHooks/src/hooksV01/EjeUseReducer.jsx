// // Sintaxis
// import React, { useReducer } from 'react';
// const [state, dispatch] = useReducer(reducer, initialState);

// Ejemplo
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <div className="card">
        <div className="card-header">
        <h5 className="card-title">Ejemplo useReducer</h5>
        </div>
        <div className="card-body">
            <button onClick={increment}>+</button>
            &nbsp; {state.count} &nbsp;
            <button onClick={decrement}>-</button>
        </div>
    </div>
  );
}