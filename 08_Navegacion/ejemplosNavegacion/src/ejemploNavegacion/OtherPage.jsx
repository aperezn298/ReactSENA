import React from 'react';
import { useNavigate } from 'react-router-dom';

export function OtherPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/products/345');
  };

  return (
    <div className="content">
      <h1>Gestión de otros</h1>
      <hr /><br />
      <p>Esta es la página de otros</p>
      <br />
      <button className="btn btn-primary" onClick={handleNavigation}>
        Ir a Productos
      </button>
    </div>
  );
}