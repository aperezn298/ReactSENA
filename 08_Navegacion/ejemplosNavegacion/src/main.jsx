import React from 'react'
import ReactDOM from 'react-dom/client'

// // Ejemplo Base
// import { AppEjemplo } from './ejemploBase/EjemploBase'

// // Ejemplo de Paginas - Externas
// import { AppPrincipal } from './ejemploPages/Principal'
// import './index.css'

// Ejemplo de Paginas - Internas
import { AppInternos } from './ejemploInternos/Principal'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        {/* <AppEjemplo /> --> Ejemplo Base */}
        {/* <AppPrincipal /> --> Ejemplo de Paginas */}
        <AppInternos /> {/* --> Ejemplo de Paginas Internas */}
    </>
)