# 🛒 Guía Paso a Paso: Crear un Carrito de Compras con React Hooks

Esta guía te enseñará a crear un carrito de compras funcional utilizando los hooks más importantes de React: **useReducer**, **useRef**, **useContext**, **useState**, **useEffect** y hooks personalizados.

## 📋 Índice
1. [Requisitos Previos](#requisitos-previos)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Paso 1: Configurar el Contexto del Carrito](#paso-1-configurar-el-contexto-del-carrito)
4. [Paso 2: Crear el Hook de Notificaciones](#paso-2-crear-el-hook-de-notificaciones)
5. [Paso 3: Crear el Componente Visual del Carrito](#paso-3-crear-el-componente-visual-del-carrito)
6. [Paso 4: Crear el Botón del Carrito](#paso-4-crear-el-botón-del-carrito)
7. [Paso 5: Agregar Estilos CSS](#paso-5-agregar-estilos-css)
8. [Paso 6: Modificar Productos para usar el Carrito](#paso-6-modificar-productos-para-usar-el-carrito)
9. [Paso 7: Integrar Todo en la Aplicación](#paso-7-integrar-todo-en-la-aplicación)
10. [Conceptos Clave Explicados](#conceptos-clave-explicados)

---

## 🎯 Requisitos Previos

Antes de empezar, asegúrate de tener:
- ✅ **React 18+** instalado
- ✅ **Bootstrap 5** y **Bootstrap Icons** instalados
- ✅ Conocimientos básicos de JavaScript y React
- ✅ Un proyecto de React funcionando

### Instalar dependencias necesarias:
```bash
npm install bootstrap bootstrap-icons
```

---

## 📁 Estructura del Proyecto

Organizaremos nuestro carrito en esta estructura:

```
src/
├── features/
│   └── cart/
│       ├── components/
│       │   ├── Cart.jsx           # Carrito principal
│       │   └── CartButton.jsx     # Botón del carrito
│       └── hooks/
│           ├── CartContext.jsx    # Context con useReducer
│           └── useNotification.jsx # Hook personalizado
└── shared/
    └── styles/
        └── estiloLanding.css     # Estilos del carrito
```

---

## 🔧 Paso 1: Configurar el Contexto del Carrito

El contexto del carrito será el corazón de nuestra aplicación. Usaremos **useReducer** para manejar el estado complejo del carrito.

### Crear `src/features/cart/hooks/CartContext.jsx`:

```jsx
import React, { createContext, useContext, useReducer, useRef, useEffect } from 'react';
import { useNotification } from './useNotification';

// 📝 Definir las acciones que puede hacer el carrito
const CART_ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM', 
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
    TOGGLE_CART: 'TOGGLE_CART'
};

// 🏁 Estado inicial del carrito
const initialState = {
    items: [],           // Array de productos
    isOpen: false,       // Si el carrito está abierto
    total: 0,           // Total en dinero
    itemCount: 0        // Cantidad de productos
};

// 🔄 Reducer: función que maneja los cambios de estado
function cartReducer(state, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEM: {
            // Buscar si el producto ya existe
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            let newItems;
            if (existingItem) {
                // Si existe, aumentar cantidad
                newItems = state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si no existe, agregarlo
                newItems = [...state.items, { ...action.payload, quantity: 1 }];
            }

            // Calcular nuevo total y cantidad
            const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

            return {
                ...state,
                items: newItems,
                total: parseFloat(total.toFixed(2)),
                itemCount
            };
        }

        case CART_ACTIONS.REMOVE_ITEM: {
            const newItems = state.items.filter(item => item.id !== action.payload);
            const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

            return {
                ...state,
                items: newItems,
                total: parseFloat(total.toFixed(2)),
                itemCount
            };
        }

        case CART_ACTIONS.UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;
            
            // Si la cantidad es 0 o menor, eliminar el producto
            if (quantity <= 0) {
                return cartReducer(state, { type: CART_ACTIONS.REMOVE_ITEM, payload: id });
            }

            const newItems = state.items.map(item =>
                item.id === id ? { ...item, quantity } : item
            );

            const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

            return {
                ...state,
                items: newItems,
                total: parseFloat(total.toFixed(2)),
                itemCount
            };
        }

        case CART_ACTIONS.CLEAR_CART:
            return {
                ...state,
                items: [],
                total: 0,
                itemCount: 0
            };

        case CART_ACTIONS.TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
            };

        default:
            return state;
    }
}

// 🌍 Crear el contexto
const CartContext = createContext();

// 🪝 Hook personalizado para usar el contexto
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de CartProvider');
    }
    return context;
};

// 🏪 Provider del carrito
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const cartRef = useRef(null);              // Referencia al carrito
    const timeoutRef = useRef(null);           // Referencia para timeouts
    const { showNotification } = useNotification();

    // 👆 Cerrar carrito al hacer click fuera (useEffect + useRef)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                dispatch({ type: CART_ACTIONS.TOGGLE_CART });
            }
        };

        if (state.isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [state.isOpen]);

    // 📦 Funciones del carrito
    const addToCart = (product) => {
        dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
        
        // Mostrar notificación
        showNotification(`${product.title} agregado al carrito`, 'success', 2000);
        
        // Auto-abrir carrito por 2 segundos
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        if (!state.isOpen) {
            dispatch({ type: CART_ACTIONS.TOGGLE_CART });
            timeoutRef.current = setTimeout(() => {
                dispatch({ type: CART_ACTIONS.TOGGLE_CART });
            }, 2000);
        }
    };

    const removeFromCart = (productId) => {
        dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: CART_ACTIONS.CLEAR_CART });
        showNotification('Carrito vaciado', 'info', 1500);
    };

    const toggleCart = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        dispatch({ type: CART_ACTIONS.TOGGLE_CART });
    };

    // 📋 Valor que se comparte con toda la aplicación
    const value = {
        ...state,           // items, isOpen, total, itemCount
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        cartRef
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
```

### 🧠 **Conceptos Aprendidos en este Paso:**
- **useReducer**: Para manejar estado complejo con múltiples acciones
- **useContext**: Para compartir estado entre componentes
- **useRef**: Para referencias a elementos DOM y valores mutables
- **useEffect**: Para efectos secundarios (event listeners)

---

## 🔔 Paso 2: Crear el Hook de Notificaciones

Este hook personalizado maneja las notificaciones toast usando **useRef** y **useCallback**.

### Crear `src/features/cart/hooks/useNotification.jsx`:

```jsx
import { useRef, useCallback } from 'react';

export const useNotification = () => {
    const notificationRef = useRef(null);
    const timeoutRef = useRef(null);

    const showNotification = useCallback((message, type = 'success', duration = 3000) => {
        // Limpiar timeout anterior
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Crear elemento de notificación si no existe
        if (!notificationRef.current) {
            notificationRef.current = document.createElement('div');
            notificationRef.current.style.cssText = \`
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                padding: 12px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
            \`;
            document.body.appendChild(notificationRef.current);
        }

        // Configurar color según el tipo
        const backgroundColor = {
            success: '#28a745',
            error: '#dc3545',
            info: '#007bff',
            warning: '#ffc107'
        }[type] || '#28a745';

        notificationRef.current.style.backgroundColor = backgroundColor;
        notificationRef.current.textContent = message;

        // Mostrar notificación con animación
        setTimeout(() => {
            if (notificationRef.current) {
                notificationRef.current.style.transform = 'translateX(0)';
            }
        }, 100);

        // Ocultar después del tiempo especificado
        timeoutRef.current = setTimeout(() => {
            if (notificationRef.current) {
                notificationRef.current.style.transform = 'translateX(100%)';
                
                // Remover del DOM después de la animación
                setTimeout(() => {
                    if (notificationRef.current && document.body.contains(notificationRef.current)) {
                        document.body.removeChild(notificationRef.current);
                        notificationRef.current = null;
                    }
                }, 300);
            }
        }, duration);
    }, []);

    return { showNotification };
};
```

### 🧠 **Conceptos Aprendidos:**
- **useRef**: Para mantener referencias a elementos DOM y timeouts
- **useCallback**: Para optimizar funciones y evitar re-renders innecesarios
- **Hook personalizado**: Reutilizar lógica entre componentes

---

## 🛒 Paso 3: Crear el Componente Visual del Carrito

Este componente renderiza el carrito lateral con todos los productos.

### Crear `src/features/cart/components/Cart.jsx`:

```jsx
import React from 'react';
import { useCart } from '../hooks/CartContext';

export const Cart = () => {
    const { 
        items, 
        isOpen, 
        total, 
        itemCount,
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        toggleCart,
        cartRef 
    } = useCart();

    // Si el carrito está cerrado, no renderizar nada
    if (!isOpen) return null;

    return (
        <div className="cart-overlay">
            <div className="cart-sidebar" ref={cartRef}>
                {/* 📝 Header del carrito */}
                <div className="cart-header">
                    <h3>
                        <i className="bi bi-cart3"></i>
                        Carrito ({itemCount})
                    </h3>
                    <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={toggleCart}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                {/* 📦 Contenido del carrito */}
                <div className="cart-content">
                    {items.length === 0 ? (
                        // Estado vacío
                        <div className="empty-cart">
                            <i className="bi bi-cart-x display-4 text-muted"></i>
                            <p className="text-muted mt-3">Tu carrito está vacío</p>
                        </div>
                    ) : (
                        <>
                            {/* Lista de productos */}
                            <div className="cart-items">
                                {items.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={updateQuantity}
                                        onRemove={removeFromCart}
                                    />
                                ))}
                            </div>

                            {/* Footer con total y acciones */}
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <h4>Total: ${total}</h4>
                                </div>
                                
                                <div className="cart-actions">
                                    <button 
                                        className="btn btn-outline-danger btn-sm me-2"
                                        onClick={clearCart}
                                    >
                                        <i className="bi bi-trash"></i>
                                        Vaciar
                                    </button>
                                    <button className="btn btn-primary">
                                        <i className="bi bi-credit-card"></i>
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// 🧩 Componente para cada producto en el carrito
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="cart-item">
            {/* 🖼️ Imagen del producto */}
            <img 
                src={item.image} 
                alt={item.title}
                className="cart-item-image"
            />
            
            {/* 📋 Detalles del producto */}
            <div className="cart-item-details">
                <h6 className="cart-item-title">{item.title}</h6>
                <p className="cart-item-price">${item.price}</p>
                
                {/* 🔢 Controles de cantidad */}
                <div className="quantity-controls">
                    <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                        <i className="bi bi-dash"></i>
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                        <i className="bi bi-plus"></i>
                    </button>
                </div>
                
                {/* 💰 Subtotal */}
                <div className="item-total">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
            
            {/* ❌ Botón eliminar */}
            <button 
                className="btn btn-outline-danger btn-sm remove-btn"
                onClick={() => onRemove(item.id)}
            >
                <i className="bi bi-x"></i>
            </button>
        </div>
    );
};
```

### 🧠 **Conceptos Aprendidos:**
- **Renderizado condicional**: `if (!isOpen) return null`
- **Componentes anidados**: `CartItem` dentro de `Cart`
- **Prop drilling**: Pasar funciones como props
- **useRef**: Referencia al contenedor del carrito

---

## 🔘 Paso 4: Crear el Botón del Carrito

Este botón va en el header y muestra la cantidad de productos.

### Crear `src/features/cart/components/CartButton.jsx`:

```jsx
import React from 'react';
import { useCart } from '../hooks/CartContext';

export const CartButton = () => {
    const { itemCount, toggleCart } = useCart();

    return (
        <button 
            className="btn btn-outline-light position-relative me-3"
            onClick={toggleCart}
        >
            <i className="bi bi-cart3"></i>
            {/* 🔢 Badge con cantidad (solo si hay productos) */}
            {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {itemCount}
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            )}
        </button>
    );
};
```

### 🧠 **Conceptos Aprendidos:**
- **Renderizado condicional**: `{itemCount > 0 && (...)}` 
- **useContext**: Acceder al estado global del carrito

---

## 🎨 Paso 5: Agregar Estilos CSS

Agregar estos estilos a tu archivo `src/shared/styles/estiloLanding.css`:

```css
/* 🛒 Estilos del carrito */
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: flex-end;
}

.cart-sidebar {
    width: 400px;
    max-width: 90vw;
    height: 100vh;
    background-color: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

.cart-header {
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
}

.cart-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.empty-cart {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
}

.cart-item {
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    gap: 1rem;
    position: relative;
}

.cart-item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #dee2e6;
}

.cart-item-details {
    flex: 1;
}

.cart-item-title {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    overflow: hidden;
}

.cart-item-price {
    font-weight: bold;
    color: #007bff;
    margin-bottom: 0.5rem;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.quantity-controls .quantity {
    min-width: 30px;
    text-align: center;
    font-weight: bold;
}

.item-total {
    font-size: 0.85rem;
    color: #6c757d;
}

.remove-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}

.cart-footer {
    padding: 1rem;
    border-top: 1px solid #dee2e6;
    background-color: #f8f9fa;
}

.cart-total {
    text-align: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #dee2e6;
}

.cart-total h4 {
    margin: 0;
    color: #007bff;
}

.cart-actions {
    display: flex;
    gap: 0.5rem;
}

.cart-actions .btn {
    flex: 1;
}

/* 📱 Responsive */
@media (max-width: 768px) {
    .cart-sidebar {
        width: 100vw;
    }
}

/* ✨ Animación del badge */
.position-relative .badge {
    animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

/* 🃏 Mejoras para las tarjetas de producto */
.card {
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.quantity-section {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 0.75rem;
}

.quantity-section .btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

---

## 🛍️ Paso 6: Modificar Productos para usar el Carrito

Ahora necesitamos modificar el componente de productos para que puedan agregar items al carrito.

### Modificar `src/features/landing/components/products.jsx`:

```jsx
import React, { useState } from "react";
import { useCart } from "../../cart/hooks/CartContext";

export function Products({ id, title, price, description, image, category }) {
    const { addToCart } = useCart();
    
    // 📝 Función para truncar texto
    const truncateText = (text, maxLength = 100) => {
        if (!text) return 'Sin descripción';
        return text.length > maxLength
            ? text.substring(0, maxLength) + '...'
            : text;
    };

    // 🔢 Estado para la cantidad (useState)
    const [count, setCount] = useState(1);
    const [statusBtn, setStatusBtn] = useState(false);
    
    const aumentarDisabled = count >= 10;
    const disminuirDisabled = count <= 1;
    
    const aumentarCantidad = () => {
        if (!aumentarDisabled) {
            setCount(count + 1);
        }
    };

    const disminuirCantidad = () => {
        if (!disminuirDisabled) {
            setCount(count - 1);
        }
    };

    // 🛒 Función para agregar al carrito
    const handleAddToCart = () => {
        const product = {
            id,
            title,
            price,
            image,
            description,
            category
        };
        
        // Agregar la cantidad seleccionada al carrito
        for (let i = 0; i < count; i++) {
            addToCart(product);
        }
        
        // Mostrar feedback visual
        setStatusBtn(true);
        setTimeout(() => {
            setStatusBtn(false);
            setCount(1);
        }, 1000);
    };

    return (
        <article className="col-md-4 mb-4">
            <div className="card h-100">
                {/* 🖼️ Imagen del producto */}
                <img
                    src={image || 'https://placehold.co/600x400?text=Sin+imagen'}
                    className="card-img-top"
                    alt={title || 'Producto'}
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/600x400?text=Error+de+imagen';
                    }}
                />
                
                <div className="card-body d-flex flex-column">
                    {/* 📝 Información del producto */}
                    <h3 className="card-title h5">{title || 'Producto sin título'}</h3>
                    <p className="card-text flex-grow-1">{truncateText(description)}</p>
                    
                    {/* 💰 Precio */}
                    <div className="price-section mb-3">
                        <h4 className="text-primary">${price || '0.00'}</h4>
                    </div>
                    
                    {/* 🔢 Selector de cantidad */}
                    <div className="quantity-section mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={disminuirCantidad}
                                disabled={disminuirDisabled}
                            >
                                <i className="bi bi-dash"></i>
                            </button>
                            <span className="mx-3 fw-bold">{count}</span>
                            <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={aumentarCantidad}
                                disabled={aumentarDisabled}
                            >
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                    
                    {/* 🛒 Botón agregar al carrito */}
                    <button 
                        className={\`btn \${statusBtn ? 'btn-success' : 'btn-primary'} w-100\`}
                        onClick={handleAddToCart}
                        disabled={statusBtn}
                    >
                        {statusBtn ? (
                            <>
                                <i className="bi bi-check"></i> Agregado
                            </>
                        ) : (
                            <>
                                <i className="bi bi-cart-plus"></i> Agregar al carrito
                            </>
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}
```

### 🧠 **Conceptos Aprendidos:**
- **useState**: Para manejar cantidad y estado del botón
- **useContext**: Acceder a las funciones del carrito (addToCart)
- **Feedback visual**: Cambiar el botón cuando se agrega al carrito

---

## 🔗 Paso 7: Integrar Todo en la Aplicación

### 7.1 Agregar el botón al Header

Modificar `src/features/landing/components/header.jsx`:

```jsx
import React from "react";
import logo from '../../../assets/images/icon.png';
import { CartButton } from '../../cart/components/CartButton';
import "../../../shared/styles/estiloLanding.css";

export function Header() {
    return (
        <header className="bg-color text-white" id="inicio">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="SportStyle logo" className="logo" /> 
                        SportStyle
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
                        </ul>
                        {/* 🛒 Botón del carrito */}
                        <CartButton />
                    </div>
                </div>
            </nav>
        </header>
    );
}
```

### 7.2 Envolver la aplicación con el CartProvider

Modificar `src/features/landing/pages/landingPage.jsx`:

```jsx
import React from "react";
import "../../../shared/styles/estiloLanding.css";

// Componentes
import {Header} from "../components/header";
import {Slider} from "../components/slider";
import {Footer} from "../components/footer";
import { ProductProvider } from "../hooks/ProductContext";
import { Company } from "../components/company";
import { Contact } from "../components/contact";

// Carrito
import { CartProvider } from "../../cart/hooks/CartContext";
import { Cart } from "../../cart/components/Cart";

export function LandingPage(){
    return(
        <CartProvider>
            <Header />
            <Slider />
            <main>
                <ProductProvider>
                    <Company />
                    <Contact />
                </ProductProvider>
            </main>
            <Footer />
            {/* 🛒 Carrito lateral */}
            <Cart />
        </CartProvider>
    );
}
```

### 7.3 Importar Bootstrap en main.jsx

Modificar `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import {LandingPage} from './features/landing/pages/landingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
```

---

## 🧠 Conceptos Clave Explicados

### 1. **useReducer vs useState**
```jsx
// ❌ Con useState (complejo para muchos estados)
const [items, setItems] = useState([]);
const [total, setTotal] = useState(0);
const [itemCount, setItemCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);

// ✅ Con useReducer (mejor para estado complejo)
const [state, dispatch] = useReducer(cartReducer, initialState);
// Un solo estado con múltiples propiedades
```

### 2. **useRef para referencias DOM**
```jsx
const cartRef = useRef(null);

// Usar en JSX
<div ref={cartRef}>Carrito</div>

// Acceder al elemento
if (cartRef.current.contains(event.target)) {
    // Hacer algo
}
```

### 3. **useContext para estado global**
```jsx
// Crear contexto
const CartContext = createContext();

// Proveer valores
<CartContext.Provider value={cartData}>
    {children}
</CartContext.Provider>

// Consumir en cualquier componente
const { addToCart, items } = useContext(CartContext);
```

### 4. **Hook personalizado**
```jsx
// Reutilizar lógica entre componentes
export const useNotification = () => {
    const showNotification = () => {
        // Lógica de notificación
    };
    
    return { showNotification };
};

// Usar en cualquier componente
const { showNotification } = useNotification();
```

### 5. **useEffect para efectos secundarios**
```jsx
useEffect(() => {
    // Configurar event listener
    document.addEventListener('click', handleClick);
    
    // Cleanup function
    return () => {
        document.removeEventListener('click', handleClick);
    };
}, [dependency]); // Solo ejecutar cuando dependency cambie
```

---

## 🎯 Funcionalidades Finales

Al completar esta guía, tendrás un carrito con:

✅ **Agregar productos** con cantidad personalizada  
✅ **Eliminar productos** del carrito  
✅ **Actualizar cantidades** (+ / -)  
✅ **Vaciar carrito** completo  
✅ **Cálculo automático** del total  
✅ **Contador** de productos en el badge  
✅ **Auto-abrir** carrito al agregar productos  
✅ **Cerrar** carrito al hacer click fuera  
✅ **Notificaciones** toast personalizadas  
✅ **Animaciones** suaves  
✅ **Diseño responsivo**  

---

## 🚀 Próximos Pasos

Una vez que tengas el carrito funcionando, puedes:

1. **Persistir el carrito** en localStorage
2. **Agregar autenticación** de usuarios
3. **Implementar checkout** y pagos
4. **Añadir favoritos** con otro contexto
5. **Optimizar rendimiento** con React.memo
6. **Agregar tests** unitarios
7. **Implementar PWA** para uso offline

---

## 📚 Recursos Adicionales

- [Documentación oficial de React Hooks](https://react.dev/reference/react)
- [Bootstrap 5 Components](https://getbootstrap.com/docs/5.3/components/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

---

¡Felicidades! 🎉 Has aprendido a crear un carrito de compras completo usando los hooks más importantes de React. Esta base te permitirá crear aplicaciones web más complejas y profesionales.
