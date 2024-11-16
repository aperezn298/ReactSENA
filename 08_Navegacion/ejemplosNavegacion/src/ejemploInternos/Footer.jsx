import React from 'react'
import * as Scroll from 'react-scroll';
const { Link } = Scroll;

export function Footer() {
    return (
        <footer>
            <p>
                © 2024 Estilos de Natación. Todos los derechos reservados.{' '}
                <Link 
                    to="inicio" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    offset={-70}
                >
                    Volver arriba
                </Link>
            </p>
        </footer>
    )
}