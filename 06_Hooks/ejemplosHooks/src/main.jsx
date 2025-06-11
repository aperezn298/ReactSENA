// // Hooks V01
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { Counter } from './hooksV01/EjeUseState'
// import { ItemList } from './hooksV01/EjeUseEffect'
// import { App } from './hooksV01/EjeUseContext'
// import { CounterReducer } from './hooksV01/EjeUseReducer'
// import { FocusInput } from './hooksV01/EjeUseRef'

// createRoot(document.getElementById('root')).render(
//   <>
//     <Counter />
//     <ItemList />
//     <App />
//     <CounterReducer />
//     <FocusInput />
//   </>,
// )


// Hooks V01
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import {EjemploUseState} from './hooksV02/ejeUseState'
// import {EjemploUseEffectUno} from './hooksV02/ejeUseEffect01'
import {EjemploUseEffectDos} from './hooksV02/ejeUseEffect02'
// import {EjemploUseContext} from './hooksV02/ejeUseContext'

createRoot(document.getElementById('root')).render(
  <>
    {/* <EjemploUseState /> */}
    {/* <EjemploUseEffectUno /> */}
    <EjemploUseEffectDos />
    {/* <EjemploUseContext /> */}
  </>,
)


// // SUMAR
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import {SumaDos} from './ejemplos/sumav02'

// createRoot(document.getElementById('root')).render(
//   <>
//     <SumaDos />
//   </>,
// )