import React, { useState, useEffect } from 'react';
import './App.css';

export function EjemploUseEffectDos () {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  // Efecto al montar y desmontar el componente
  useEffect(() => {
    console.log('El componente se ha montado.');

    return () => {
      console.log('El componente se va a desmontar.');
    };
  }, []);

  // Efecto al actualizarse la lista de items
  useEffect(() => {
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      alert(`Se agregó el item: ${lastItem}`);
      setInputValue('');
      console.log(`items actualizado: ${items.join(', ')}`);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = inputValue.trim();
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Ejemplo de useEffect</h5>
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
        <p><strong>Items:</strong></p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}