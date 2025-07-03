import { Table, Button, Badge, Spinner, Alert, Image, ButtonGroup, Dropdown } from 'react-bootstrap';

const ProductList = ({ products, loading, error, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p className="mt-2">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Error al cargar productos</Alert.Heading>
        <p>{error}</p>
      </Alert>
    );
  }

  if (products.length === 0) {
    return (
      <Alert variant="info">
        <Alert.Heading>No hay productos</Alert.Heading>
        <p>No se encontraron productos. ¡Crea el primer producto!</p>
      </Alert>
    );
  }

  const getCategoryName = (categoryId) => {
    const categories = {
      1: 'Clothes',
      2: 'Electronics',
      3: 'Furniture',
      4: 'Shoes',
      5: 'Others'
    };
    return categories[categoryId] || 'Unknown';
  };

  const getCategoryVariant = (categoryId) => {
    const variants = {
      1: 'primary',
      2: 'success',
      3: 'warning',
      4: 'info',
      5: 'secondary'
    };
    return variants[categoryId] || 'secondary';
  };

  const truncateText = (text, maxLength = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="dashboard-table-container">
      <Table responsive hover className="dashboard-table">
        <thead className="table-dark">
          <tr>
            <th style={{ width: '80px' }}>Imagen</th>
            <th style={{ width: '60px' }}>ID</th>
            <th>Producto</th>
            <th style={{ width: '300px' }}>Descripción</th>
            <th style={{ width: '120px' }}>Categoría</th>
            <th style={{ width: '100px' }}>Precio</th>
            <th style={{ width: '150px' }} className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="align-middle">
              <td>
                <Image
                  src={product.images?.[0] || 'https://via.placeholder.com/60'}
                  alt={product.title}
                  width="60"
                  height="60"
                  className="rounded object-fit-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/60';
                  }}
                />
              </td>
              <td>
                <span className="text-muted fw-bold">#{product.id}</span>
              </td>
              <td>
                <div>
                  <div className="fw-semibold text-dark" title={product.title}>
                    {truncateText(product.title, 40)}
                  </div>
                </div>
              </td>
              <td>
                <span 
                  className="text-muted small"
                  title={product.description}
                >
                  {truncateText(product.description, 80)}
                </span>
              </td>
              <td>
                <Badge 
                  bg={getCategoryVariant(product.category?.id)}
                  className="px-2 py-1"
                >
                  {product.category?.name || getCategoryName(product.category?.id)}
                </Badge>
              </td>
              <td>
                <span className="fw-bold text-success fs-6">
                  ${product.price?.toFixed(2)}
                </span>
              </td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => onEdit(product)}
                    className="btn-action"
                    title="Editar producto"
                  >
                    <i className="bi bi-pencil-square"></i>
                    Editar
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onDelete(product)}
                    className="btn-action"
                    title="Eliminar producto"
                  >
                    <i className="bi bi-trash"></i>
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
