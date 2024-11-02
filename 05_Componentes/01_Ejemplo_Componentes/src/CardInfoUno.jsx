import React from 'react';
import './App.css'

// Este es un componente de tarjeta simple que muestra información del usuario.
export function CardInfo() {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Saludos, Alice!</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong>Edad:</strong> 23 <br />
          <strong>Membresia:</strong> Activo <br />
          <strong>Nombres y apellidos:</strong> Alice Doe <br />
          <strong>Correo:</strong> alicedoe@ejemplo.com <br />
          <strong>Telefono:</strong> 1234567890 <br />
        </p>
        <a href="#" className="card-link">Mas información...</a>
      </div>
    </div>
  );
}