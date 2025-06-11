// // Sintaxis de useState
// import React, { useState } from 'react';
// const [suma, setSuma] = useState(0);
// // Como se utiliza useState
// import React, { useState } from 'react';
// const App = () => {
//     const [suma, setSuma] = useState(0);
//     return (
//         <div>
//             <h1>La suma es: {suma}</h1>
//             <button onClick={() => setSuma(suma + 1)}>Incrementar</button>
//         </div>
//     );
// };

// ::::::::::::::::::::::::::::::::::::::

// // Sintaxis de useEffect
// // Importar React y useEffect desde 'react'
// import React, { useEffect } from 'react';
// // Definir el componente funcional App
// const App = () => {
//     useEffect(() => {
//         // Código que se ejecuta al montar el componente
//         return () => {
//             // Código opcional que se ejecuta al desmontar el componente
//         };
//     }, // Dependencias que se ejecutan al cambiar los estados del componente
//     []);
//     return (
//         // Código JSX del componente
//     );
// };


import React, { useState, useEffect } from 'react';

export function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Este código se ejecuta cuando el componente se monta o cuando 'contador' cambia
    console.log('El componente se montó o el contador cambió:', contador);
    return () => {
        // Este return se ejecuta cuando el componente se desmonta
        console.log('El componente se va a desmontar o el contador cambiará');
    };
  }, [contador]); // Dependencia: el efecto se ejecuta cuando 'contador' cambia
  
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}