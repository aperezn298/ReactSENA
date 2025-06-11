import React, { useState, useEffect } from 'react';
import './App.css'

export function EjemploUseEffectUno() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        // Este código se ejecuta cuando el componente se monta o cuando 'contador' cambia
        console.log('El componente se montó o el contador cambió:', contador);
        return () => {
            // Este return se ejecuta cuando el componente se desmonta
            console.log('El componente se va a desmontar o el contador cambiará');
        };
    }, [contador]); // Dependencia: el efecto se ejecuta cuando 'contador' cambia

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Ejemplo useEffect</h5>
            </div>
            <div className="card-body">
                <p>Contador: {contador}</p>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            </div>
        </div>
    );
}
