// // Sintaxis
// useEffect(() => {
//   // Código a ejecutar después del renderizado
//   // API - BD - Eventos - Timers - Subscripciones
//   return () => {
//     // Código opcional de limpieza
//   };
// }, [dependencies]);

// Ejemplo
import React, { useState, useEffect } from 'react';
import './App.css'

export function ItemList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      alert(`Se agregó el item: ${lastItem}`);
      setInputValue('');
    }
  }, [items]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const lastItem =  inputValue.trim()
      setItems((actualElements) => [...actualElements, lastItem]);
      // setInputValue('');
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Ejemplo useEffect</h5>
      </div>
      <div className="card-body">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe un item ..."
        />
        &nbsp;
        <button onClick={handleAddItem}>Agregar</button>
        <br /><br /><hr />
        <p>Items:</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}