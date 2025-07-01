import React from 'react';
import { useParams } from 'react-router-dom';

export function ProductPage() {
    const { id } = useParams();
    return (
        <div className="content">
            <h1>Gestíon de productos</h1>
            <hr /><br />
            <p>Esta es la página de productos</p>
            {id && <p>El ID del producto es: {id}</p>}
        </div>
    );
}