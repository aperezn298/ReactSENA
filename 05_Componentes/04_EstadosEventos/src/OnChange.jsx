import React, { useState } from 'react';
import './App.css'

export function CompOnChange() {
  const [inputValueOne, setInputValueOne] = useState(null);
  const [inputValueTwo, setInputValueTwo] = useState(null);

  const handleInputOne = (e) => setInputValueOne(Number(e.target.value));
  const handleInputTwo = (e) => setInputValueTwo(Number(e.target.value));

  const sum = inputValueOne + inputValueTwo;

  return (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">Ejemplo No.02</h5>
    </div>
    <div className="card-body">
      <p>Ejemplo de estados y eventos - onChange</p>

      <input type="number" value={inputValueOne} onChange={handleInputOne} 
          size="5" placeholder="Primer número ..."  />
      +
      <input type="number" value={inputValueTwo} onChange={handleInputTwo} 
          placeholder="Primer número ..."  />
      <br />
      <strong>
        <label> Resultado es: {sum} </label>
      </strong>
    </div>
  </div>
  );
}