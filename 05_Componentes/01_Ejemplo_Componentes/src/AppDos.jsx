import React from 'react';
import { CardInfoComp } from './CardInfoDos.jsx'

// Proceso para muchos usuarios

const usuarios = [{
    id:1,
    nick: 'Alice', 
    edad: 23, 
    membresia: 'Activo', 
    nombres: 'Alice Doe', 
    correo: 'alicedoe@ejemplo.com',
    telefono: '1234567890'},
    {
    id:2,
    nick: 'Bob',
    edad: 25,
    membresia: 'Inactivo',
    nombres: 'Bob Doe',
    correo: 'bobdoe@gmail.com',
    telefono: '0987654321'
    },
    {
    id:3,
    nick: 'Charlie',
    edad: 27,
    membresia: 'Activo',
    nombres: 'Charlie Doe',
    correo: 'charliedoe@hotmail.com',
    telefono: '1357924680'
}];

export function AppMultiple() {
    return (
        usuarios.map(({id, nick, edad, membresia, nombres, correo, telefono}) =>
            <CardInfoComp
                key={id}
                nick={nick}
                edad={edad}
                membresia={membresia}
                nombres={nombres}
                correo={correo}
                telefono={telefono}/>
        )
    );
}