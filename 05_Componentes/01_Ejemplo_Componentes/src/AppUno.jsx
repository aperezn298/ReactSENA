import React from 'react';
import { CardInfoComp } from './CardInfoDos.jsx'

// Proceso para un solo usuario

// Datos de usuario
const usuario = {
    nick: 'Alice', 
    edad: 23, 
    membresia: 'Activo', 
    nombres: 'Alice Doe', 
    correo: 'alicedoe@ejemplo.com',
    telefono: '1234567890'};

// Componente principal - Padre
export function AppSingle() {
    return (
        <CardInfoComp 
            nick={usuario.nick}
            edad={usuario.edad}
            membresia={usuario.membresia}
            nombres={usuario.nombres}
            correo={usuario.correo}
            telefono={usuario.telefono}/>
    );
}