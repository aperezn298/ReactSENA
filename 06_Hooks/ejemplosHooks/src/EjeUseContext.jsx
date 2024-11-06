// // Sintaxis
// const value = useContext(MyContext);

// Provider - Sintaxis
// <MyContext.Provider value={/* valor a compartir */}>
//    {/* componentes que pueden acceder al contexto */}
// </MyContext.Provider>

// Ejemplo
import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext('light');

export function DisplayTheme() {
  const theme = useContext(ThemeContext);
  const icon = theme === 'light' ? '🌞' : '🌜';
  return (
    <p>Tema seleccionado es: <strong>{theme} - {icon}</strong></p>
  );
}

export function App() {
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