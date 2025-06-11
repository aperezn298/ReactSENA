// Sintaxis de useState
import React, { useState } from 'react';
import './App.css'

export const EjemploUseState = () => {
    const [suma, setSuma] = useState(0);
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Ejemplo useState</h5>
            </div>
            <div className="card-body">
                <h1>La suma es: {suma}</h1>
                <button onClick={() => setSuma(suma + 1)}>Incrementar</button>
            </div>
        </div>
    );
};