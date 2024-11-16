import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';
import { UserPage } from './UserPage';

export function AppPrincipal() {
    return (
        <Router>
            <nav className="vertical-nav">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/products" className="nav-link">Productos</Link>
                <Link to="/user" className="nav-link">Usuarios</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </Router>
    );
}