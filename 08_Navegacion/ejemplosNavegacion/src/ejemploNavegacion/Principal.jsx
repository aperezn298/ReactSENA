// Librerias 
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// Componentes
import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';
import { UserPage } from './UserPage';
import { OtherPage } from './OtherPage';
import { DashboardPage } from './Dashboard';
import { ProtectedRoute } from './ProtectedRoute';
import { NotFound } from './Error';

// Componente principal de la aplicación
// Este componente define la estructura de navegación y las rutas de la aplicación
export function AppPrincipal() {
    return (
        <BrowserRouter>
            <nav className="vertical-nav">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/products/23" className="nav-link">Productos</Link>
                <Link to="/user" className="nav-link">Usuarios</Link>
                <Link to="/other" className="nav-link">Otros</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/other" element={<OtherPage />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute> 
                        <DashboardPage /> 
                    </ProtectedRoute>} 
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}





