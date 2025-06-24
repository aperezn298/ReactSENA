/**
 * App: Este componente envuelve toda la aplicación con el 
 * Provider de Redux, que permite a los componentes hijos 
 * acceder al store.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Counter } from './Counter';

/**
 * Componente principal de la aplicación
 * Configura el Provider de Redux y renderiza el contador
 * @returns {JSX.Element} Componente App renderizado
 */
export function App() {
  // Renderiza el componente Provider con el store y el componente Counter
  return (
    <Provider store={store}>
      <div className="card">
        <h1>Contador con Redux</h1>
        <Counter />
      </div>
    </Provider>
  );
}