/**
 * Counter: Este componente muestra el contador y tiene botones 
 * para incrementar o decrementar el valor. Usamos useSelector 
 * para acceder al valor del contador en el store y useDispatch 
 * para disparar las acciones increment y decrement.
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import '../index.css'

/**
 * Componente Counter que maneja la lógica del contador
 * Utiliza hooks de Redux para acceder y modificar el estado
 * @returns {JSX.Element} Componente Counter renderizado
 */
export function Counter() {
  // Obtiene el valor actual del contador del estado global
  const count = useSelector(state => state.storeCount.count);
  // Obtiene la función dispatch para enviar acciones al reducer
  const dispatch = useDispatch();

  /**
   * Manejador para incrementar el contador
   * @function handleIncrement
   */
  const handleIncrement = () => dispatch(increment());

  /**
   * Manejador para decrementar el contador
   * @function handleDecrement
   */
  const handleDecrement = () => dispatch(decrement());

  // Renderiza el componente
  return (
    <div className="counter-container">
      <div className="button-container">
        <button onClick={handleIncrement}>Incrementar</button>
         &nbsp; <span> {count} </span> &nbsp; 
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
    </div>
  );
}