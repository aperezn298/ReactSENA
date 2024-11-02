import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
// Componente simple
import { CardInfo } from './CardInfoUno' 
// Componente con propiedades
import { AppSingle } from './AppUno'
import { AppMultiple } from './AppDos'

// // Mostrar el Componente simple
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<CardInfo />)

// Mostrar todos los componentes
root.render(
    <>
        <CardInfo />
        <AppSingle />
        <AppMultiple />
    </>
)