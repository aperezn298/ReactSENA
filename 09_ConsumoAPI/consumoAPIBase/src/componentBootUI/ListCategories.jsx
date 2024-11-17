import React, { useState, useEffect } from "react";
// import Componentes de Bootstrap
import { Table, Button } from "react-bootstrap";
// Importa los estilos de Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

export function ListarCategorias() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [states, setStates] = useState({});

  const handleClick = (categoryId) => {
    setStates(prevStates => ({
      ...prevStates,
      [categoryId]: !prevStates[categoryId]
    }));
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Categorias de la API</h1>
      <Table responsive bordered hover className="align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>#</th>
            <th>Categoria</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.slice(0, 5).map((categoria, index) => {
            // Determina el estado de cada categoría individualmente
            const isActive = states[categoria.id] !== undefined ? states[categoria.id] : true;
            const stateLabel = isActive ? 'Activo' : 'Inactivo';
            const buttonClassName = isActive ? 'btn btn-outline-success' : 'btn btn-outline-danger';

            return (
              <tr key={categoria.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={categoria.image}
                      alt={categoria.name}
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{categoria.name}</p>
                      <p className="text-muted mb-0">Actualización: {categoria.updatedAt}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <Button variant={buttonClassName} onClick={() => handleClick(categoria.id)}>
                  <i className="bi bi-lock"></i> &nbsp; <span>{stateLabel}</span>
                  </Button>
                </td>
                <td>
                  <Button variant="btn btn-outline-primary" size="sm">
                    <i className="bi bi-eye"></i>
                  </Button> &nbsp;
                  <Button variant="btn btn-outline-warning" size="sm">
                    <i className="bi bi-pencil-fill"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}