import React from 'react'
import * as Scroll from 'react-scroll';
const { Link } = Scroll;

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link 
                            to="inicio" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="productos" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="usuarios" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                            Usuarios
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}