import React, { useRef, useState } from 'react';

export function Suma() {
  const numero1Ref = useRef();
  const numero2Ref = useRef();
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    const n1 = Number(numero1Ref.current.value);
    const n2 = Number(numero2Ref.current.value);
    setResultado(n1 + n2);
  };

  return (
    <div>
      <h1>Suma de dos números</h1>
      <input type="number" ref={numero1Ref} />
      +
      <input type="number" ref={numero2Ref} />
      =
      <button onClick={sumar}>Sumar</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}