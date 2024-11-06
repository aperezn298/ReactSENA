// // Sintaxis
// const [state, setState] = useState(initialValue);

// Ejemplo
import React, { useState } from 'react';
import './App.css'

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Ejemplo useState</h5>
    </div>
    <div className="card-body">
      <p>Valor: {count}</p>
      <button onClick={increment}>Aumentar</button>
    </div>
  </div>
  );
}