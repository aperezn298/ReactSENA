import React from 'react';
import './App.css'

// Este es un componente hijo que recibe las propiedades de usuario y las muestra.
export function CardInfoComp({nick, edad, membresia, nombres, correo, telefono}) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Saludos, {nick}!</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong>Edad:</strong> {edad} <br />
          <strong>Membresia:</strong> {membresia} <br />
          <strong>Nombres y apellidos:</strong> {nombres} <br />
          <strong>Correo:</strong> {correo} <br />
          <strong>Telefono:</strong> {telefono} <br />
        </p>
        <a href="#" className="card-link">Mas información...</a>
      </div>
    </div>
  );
}