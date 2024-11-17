import React, { useEffect, useState } from "react";

export function ListarProductos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Productos de la API</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody className="zebra-striping">
        {data.slice(0, 10).map((products, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{products.title}</td>
            <td>{products.price}</td>
            <td>{products.category.name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}