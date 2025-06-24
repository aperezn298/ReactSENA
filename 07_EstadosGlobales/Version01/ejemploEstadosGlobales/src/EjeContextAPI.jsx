// Ejemplo de uso de Context API en React
import React, { createContext, useContext, useState } from 'react';
import './App.css';

// 1. Crear un contexto
const UserContext = createContext();

// Componente padre
export function App() {
  // Estado compartido
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  return (
    // 2. Proveer el contexto a los componentes hijos
    <div className='card-uno'>
      <UserContext.Provider value={{ user, setUser }}>
        <Profile />
        <Settings />
      </UserContext.Provider>

    </div>
  );
}

// Componentes hijos
function Profile() {
  // 3. Acceder al contexto
  const { user }  = useContext(UserContext);
  return (
    // 4. Consumir el contexto
    <div className='card-dos'>
      <h1>Perfil: {user.name}</h1>
      <p>Edad: {user.age}</p>
    </div>
  );
}

// Componentes hijos
function Settings() {
  // 3. Acceder al contexto
  const { user, setUser } = useContext(UserContext);

  // Modificar el estado compartido
  const updateName = () => {
    // Actualizar el estado compartido desde un componente hijo
    setUser((prevUser) => ({ ...prevUser, name: 'Bob', age: 30 }));
  };

  return (
    // 5. Modificar el contexto
    <div className='card-dos'>
      <h2>Configuración</h2><hr/>
      <p>Usuario: {user.name}</p>
      <p>Edad: {user.age}</p>
      <button onClick={updateName}>Actualizar Perfil</button>
    </div>
  );
}