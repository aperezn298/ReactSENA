import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
// import { HomePage, AboutPage, ProductPage, DashboardPage } from './pages';

function HomePage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Lógica de autenticación
        // ...

        // Redirige a la página de dashboard
        navigate('/dashboard');
    };

    return (
        <div>
            <h1>Inicio</h1>
            <p>Bienvenido a la página de inicio</p>
            <br />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}

function AboutPage() {
    return (
        <div>
            <h1>Acerca de</h1>
            <p>Nosotros somos una empresa dedicada a...</p>
        </div>
    );
}

function ProductPage() {
    const { productId } = useParams();
    return (
        <div>
            <h1>Producto {productId}</h1>
            <p>Información del producto {productId}</p>
        </div>
    );
}

function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Panel de control</p>
        </div>
    );
}

export function AppEjemplo() {
    const productoId = 123;
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/about">Acerca de</Link>
                <Link to={`/product/${productoId}`}>Productos</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
}