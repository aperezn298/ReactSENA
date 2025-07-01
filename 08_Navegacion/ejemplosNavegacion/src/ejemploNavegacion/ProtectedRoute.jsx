import React from 'react';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
    const isAuthenticated = false; 

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
}