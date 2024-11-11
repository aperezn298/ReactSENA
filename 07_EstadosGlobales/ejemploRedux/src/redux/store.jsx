/**
 * Store: El store es donde se guarda el estado global 
 * (en este caso, el valor del contador). El store se 
 * crea usando el counterReducer.
 */

import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer';

/**
 * Configuración del store de Redux usando @reduxjs/toolkit
 * El reducer principal está bajo la clave 'storeCount'
 */
const store = configureStore({
  reducer: {
    storeCount: counterReducer,
  },
});

export {store};


// Forma antigua de crear el store de Redux
// import { createStore } from 'redux';
// import { counterReducer } from './reducer';
// const store = createStore(counterReducer);
// export {store};