// // Sintasis
// import React, { useRef } from 'react';
// const refContainer = useRef(initialValue);


// Ejemplo
import React, { useRef } from 'react';

export function FocusInput() {
    const inputRefEmail = useRef('aperezn@sena.edu.co');
    const inputRefPass = useRef(null);

    console.log('inputRefEmail: ', inputRefEmail);

    const handleFocus = (e) => {
        e.preventDefault();
        inputRefEmail.current.value = '';
        inputRefPass.current.value = '';
        inputRefEmail.current.focus();
        console.log('inputRefEmail: ', inputRefEmail);
    };

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Ejemplo useRef</h5>
            </div>
            <div className="card-body">
                <form>
                    <label>Usuario:</label>
                    <input type="email" defaultValue="aperezn@sena.edu.co" ref={inputRefEmail} />
                    <br />
                    <label>Contraseña:</label>
                    <input type="password" defaultValue="123456" ref={inputRefPass} />
                    <button onClick={handleFocus}>Restablecer</button>
                </form>
            </div>
        </div>
    );
}