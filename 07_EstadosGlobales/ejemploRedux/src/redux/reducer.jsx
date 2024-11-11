/**
 * Reducer: El reducer recibe las acciones y actualiza el estado. 
 * En este caso, si se recibe la acción INCREMENT, incrementa el 
 * contador. Si se recibe DECREMENT, decrementa el contador.
 */


import { INCREMENT, DECREMENT } from './actions';

/**
 * Estado inicial de la aplicación
 * @constant {Object} initialState
 * @property {number} count - Valor inicial del contador (0)
 */
const initialState = {
  count: 0
};

/**
 * Reducer principal para manejar el estado del contador
 * @param {Object} state - Estado actual (usa initialState por defecto)
 * @param {Object} action - Acción a ejecutar
 * @returns {Object} Nuevo estado
 */
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      // Retorna un nuevo estado con el contador incrementado en 1
      return {
        // Retorna el estado actual
        ...state,
        // Incrementa el contador en 1
        count: state.count + 1
      };

    case DECREMENT:
      // Retorna un nuevo estado con el contador decrementado en 1
      return {
        // Retorna el estado actual
        ...state,
        // Decrementa el contador en 1
        count: state.count - 1
      };

    default:
      // Retorna el estado actual si no coincide con ninguna acción
      return state;
  }
}