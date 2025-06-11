import React, { useState } from 'react';

export function SumaDos() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const sumar = () => setResultado(numero1 + numero2);

  return (
    <div>
      <h1>Suma de dos números</h1>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
      />
      +
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
      />
      =
      <button onClick={sumar}>Sumar</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}