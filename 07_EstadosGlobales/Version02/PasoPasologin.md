# Ejercicio de Autenticación con Redux Toolkit

> **Introducción para el estudiante:** Este proyecto es un ejercicio práctico diseñado para que aprendas a implementar un sistema de autenticación completo utilizando tecnologías modernas de React. A través de este ejercicio, comprenderás cómo estructurar un proyecto React de manera profesional, organizando tu código en módulos reutilizables y aplicando patrones de diseño que facilitan el mantenimiento y la escalabilidad. El objetivo principal es que domines Redux Toolkit para la gestión de estado y que puedas integrar llamadas a APIs externas dentro de una arquitectura bien estructurada.

Este proyecto demuestra cómo implementar un sistema completo de autenticación utilizando React y Redux Toolkit, siguiendo una estructura de proyecto modular y escalable.

## Descripción General

En este ejercicio, aprenderás a:
- Utilizar Redux Toolkit para la gestión del estado
- Crear una estructura de proyecto modular utilizando el patrón "Feature Folder" (Carpetas por Características)
- Implementar autenticación con una API real
- Crear hooks personalizados para encapsular la lógica de negocio
- Manejar operaciones asíncronas con Redux Thunks (funciones asíncronas)

## Primeros Pasos

### Requisitos previos
- Node.js (v14 o posterior)
- npm o yarn

### Instalación

1. Clona este repositorio o descarga el código fuente
   <!-- Este comando permite copiar el código desde el repositorio remoto a tu máquina local -->
2. Navega al directorio del proyecto:
   ```bash
   cd login
   ```
   <!-- Este comando te permite entrar a la carpeta del proyecto -->
3. Instala las dependencias:
   ```bash
   npm install
   ```
   <!-- Este comando instala todas las bibliotecas necesarias listadas en package.json -->
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   <!-- Este comando ejecuta Vite, que compila el código y crea un servidor local para desarrollo -->
5. Abre tu navegador y navega a http://localhost:5173 (o la URL mostrada en tu terminal)
   <!-- Esta URL te permite ver la aplicación funcionando en tu navegador -->

## Autenticación con API

Este proyecto utiliza una API pública para la autenticación:

- URL: `https://api.escuelajs.co/api/v1/users`
- Credenciales de prueba:
  - Email: `john@mail.com`
  - Contraseña: `changeme`

## Estructura del Proyecto

```
src/
├── app/
│   └── store.js            # Configuración del store de Redux
├── features/
│   └── auth/               # Funcionalidad de autenticación
│       ├── components/     # Componentes de UI
│       │   ├── LoginForm.jsx  # Formulario de inicio de sesión
│       │   └── Dashboard.jsx  # Panel de usuario autenticado
│       ├── pages/          # Componentes de páginas
│       │   ├── LoginPage.jsx  # Página de login completa
│       │   └── DashboardPage.jsx  # Página de dashboard
│       ├── hooks/          # Hooks personalizados
│       │   └── useAuth.js  # Hook para manejar la autenticación
│       ├── services/       # Servicios para llamadas a API
│       │   └── authService.js  # Servicio de autenticación
│       ├── slices/         # Lógica de Redux
│       │   ├── authSlice.js  # Definición del estado y reducers
│       │   ├── authThunks.js  # Funciones asíncronas (thunks)
│       │   └── authSelectors.js  # Selectores para acceder al estado
│       └── index.js        # Punto de entrada y exportaciones
└── App.jsx                 # Componente principal de la aplicación
```
<!-- Esta estructura sigue el patrón "Feature Folder" o "Carpetas por Características",
     que organiza el código por funcionalidad en lugar de por tipo de archivo.
     Esto facilita la escalabilidad y el mantenimiento del proyecto. -->

## Conceptos Fundamentales

### Configuración de Redux Toolkit

La configuración del store es simple y limpia usando Redux Toolkit:

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
```
<!-- 
Este código configura el store de Redux:
1. Importamos configureStore desde Redux Toolkit, que simplifica la configuración
2. Importamos el reducer de autenticación desde el módulo de auth
3. Creamos el store con el reducer de autenticación bajo la clave 'auth'
4. Este store será accesible en toda la aplicación a través del Provider de Redux
-->

### Slice de Autenticación

El slice de autenticación gestiona el estado de autenticación:

```javascript
// src/features/auth/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,                // Datos del usuario autenticado
  isAuthenticated: false,    // Estado de autenticación
  isLoading: false,          // Indicador de carga durante la autenticación
  error: null                // Mensaje de error si falla la autenticación
};

const authSlice = createSlice({
  name: 'auth',              // Nombre del slice para identificarlo en Redux DevTools
  initialState,              // Estado inicial definido arriba
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;  // Almacena los datos del usuario
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Almacena el mensaje de error
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});
```
<!-- 
Redux Toolkit utiliza la librería Immer internamente, lo que permite "mutar" 
el estado directamente en los reducers aunque realmente esté creando un nuevo estado inmutable.
Esto hace que el código sea más limpio y fácil de entender.
-->

### Servicio de API

El servicio de autenticación maneja las llamadas a la API:

```javascript
// src/features/auth/services/authService.js
const API_URL = 'https://api.escuelajs.co/api/v1';

export const authenticateUser = async (credentials) => {
  const { email, password } = credentials;
  
  const response = await fetch(`${API_URL}/users`);
  
  if (!response.ok) {
    throw new Error('Error al conectar con el servidor');
  }
  
  const users = await response.json();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar
    };
  }
  
  return null;
};
```
<!--
Este servicio:
1. Hace una petición a la API para obtener todos los usuarios
2. Busca un usuario que coincida con el email y contraseña proporcionados
3. Si encuentra una coincidencia, devuelve los datos relevantes del usuario
4. Si no, devuelve null (indicando que las credenciales son incorrectas)

Nota: En una aplicación real, la autenticación se haría en el backend por seguridad,
pero este enfoque simplificado sirve para fines didácticos.
-->

### Hook Personalizado

El hook `useAuth` encapsula toda la lógica relacionada con la autenticación:

```javascript
// src/features/auth/hooks/useAuth.js
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/authThunks';
import { logout } from '../slices/authSlice';
import { selectAuth, selectUser, selectIsAuthenticated, selectIsLoading, selectError } from '../slices/authSelectors';

export const useAuth = () => {
  const dispatch = useDispatch();
  
  // Obtener el estado de autenticación desde Redux
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  // Función de inicio de sesión
  const login = async (credentials) => {
    return await dispatch(loginUser(credentials));
  };
  
  // Función de cierre de sesión
  const logoutUser = () => {
    dispatch(logout());
  };
  
  return {
    auth, user, isAuthenticated, isLoading, error,
    login, logout: logoutUser
  };
};
```
<!--
Los hooks personalizados son una poderosa forma de reutilizar lógica entre componentes.
Este hook:
1. Utiliza useDispatch para poder disparar acciones de Redux
2. Utiliza useSelector para acceder al estado de Redux
3. Expone funciones como login y logout para que los componentes puedan usarlas
4. Provee valores del estado como isAuthenticated, user, isLoading y error

Esto permite que los componentes de UI sean más simples y estén más enfocados
en la presentación, mientras la lógica queda encapsulada en este hook.
-->

## Componentes Principales

### Formulario de Login

El componente de formulario de login maneja la entrada de usuario y la autenticación:

```jsx
// src/features/auth/components/LoginForm.jsx
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');  // Estado para el email
  const [password, setPassword] = useState('');  // Estado para la contraseña
  const { login, isLoading, error } = useAuth();  // Extraemos funciones y estado del hook personalizado

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario
    await login({ email, password });  // Intentar iniciar sesión con las credenciales
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        
        {/* Mostrar mensaje de error si existe */}
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="usuario@ejemplo.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Tu contraseña"
          />
        </div>
        
        {/* El botón se deshabilita durante la carga */}
        <button type="submit" disabled={isLoading} className="login-button">
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        
        <div className="login-info">
          <p>Para pruebas usar:</p>
          <p>Email: john@mail.com</p>
          <p>Contraseña: changeme</p>
        </div>
      </form>
    </div>
  );
};
```
<!--
Este componente:
1. Utiliza los estados locales con useState para gestionar los campos del formulario
2. Utiliza el hook personalizado useAuth para acceder a la lógica de autenticación
3. Implementa validación básica con el atributo required de HTML
4. Muestra mensajes de error si la autenticación falla
5. Deshabilita el botón durante el proceso de carga
-->

### Panel de Control

El componente de dashboard muestra la información del usuario después de la autenticación exitosa:

```jsx
// src/features/auth/components/Dashboard.jsx
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user, logout } = useAuth();  // Obtenemos el usuario y la función de logout

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Panel de Control</h1>
        <button className="logout-button" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="user-info">
          <h2>Información del Usuario</h2>
          {/* Mostrar avatar si existe */}
          {user?.avatar && (
            <div className="user-avatar">
              <img src={user.avatar} alt={`Avatar de ${user.name}`} />
            </div>
          )}
          <p><strong>Nombre:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>ID:</strong> {user?.id}</p>
          <p><strong>Rol:</strong> {user?.role}</p>
        </div>
      </div>
    </div>
  );
};
```
<!--
Este componente:
1. Utiliza el hook useAuth para obtener la información del usuario y la función de logout
2. Muestra la información del usuario autenticado
3. El operador ?. (encadenamiento opcional) evita errores si user es null
4. Proporciona un botón para cerrar la sesión
-->

## Cómo Ejecutar la Aplicación

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   <!-- Este comando inicia el servidor de desarrollo de Vite -->

2. Abre tu navegador y navega a la URL mostrada en la terminal (normalmente `http://localhost:5173`)
   <!-- Vite usa el puerto 5173 por defecto, a diferencia de Create React App que usa el 3000 -->

3. Inicia sesión usando las credenciales de prueba:
   - Email: `john@mail.com`
   - Contraseña: `changeme`
   <!-- Estas credenciales están configuradas en la API de prueba -->

## Elementos Faltantes de Implementación y Mejora

Para mejorar tu aprendizaje, intenta extender el proyecto con estos ejercicios:

1. **Agregar Validación de Formularios**
   - Implementa validación del lado del cliente para el formulario de login
   - Añade mensajes de validación para el formato de email y requisitos de contraseña
   <!-- Puedes usar bibliotecas como Formik o React Hook Form para esto, o implementarlo manualmente -->

2. **Login Persistente**
   - Almacena el estado de autenticación en localStorage
   - Implementa una función de auto-login cuando se recarga la página
   <!-- Esto mejora la experiencia de usuario al mantener la sesión entre recargas -->


## Aprende Más

- [Documentación oficial de Redux Toolkit](https://redux-toolkit.js.org/)
- [Documentación de React](https://react.dev/)
- [Guía sobre estructura de código en React](https://reactjs.org/docs/faq-structure.html)
- [Patrón "Ducks" para Redux](https://github.com/erikras/ducks-modular-redux)