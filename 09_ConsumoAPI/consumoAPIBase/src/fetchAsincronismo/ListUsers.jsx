import React, { useEffect, useState } from "react";

export function ListarUsuarios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Usuarios de la API</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody className="zebra-striping">
        {data.slice(0, 10).map((users, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.role}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}