import React, { createContext, useContext } from 'react';

// 1. Crear el contexto con valor predeterminado
export const ThemeContext = createContext('light');

// 2. Crear el componente que usará el contexto
// Componente padre - Proveedor
export function EjemploUseContext () {
  return (
    <div className="card">
        <div className="card-header">
            <h5 className="card-title">Ejemplo useContext</h5>
        </div>
        <div className="card-body">
            <ThemeContext.Provider value="dark">
                <DisplayTheme />
            </ThemeContext.Provider>

            <DisplayTheme />
        </div>
    </div>
  );
}

// 3. Crear el componente hijo que consumirá el contexto
// Componente Hijo - Consumidor
export function DisplayTheme() {
  const theme = useContext(ThemeContext);
  const icon = theme === 'light' ? '🌞' : '🌜';
  return (
    <p>Tema seleccionado es: <strong>{theme} - {icon}</strong></p>
  );
}