import { useState, useEffect } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

const ProductForm = ({ show, onHide, onSubmit, product, loading }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: 1,
    images: ['']
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        price: product.price || '',
        description: product.description || '',
        categoryId: product.category?.id || 1,
        images: product.images || ['']
      });
    } else {
      setFormData({
        title: '',
        price: '',
        description: '',
        categoryId: 1,
        images: ['']
      });
    }
    setErrors({});
  }, [product, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      images: [value || 'https://via.placeholder.com/300']
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido';
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const submitData = {
      ...formData,
      price: parseFloat(formData.price),
      images: formData.images.filter(img => img.trim() !== '')
    };

    onSubmit(submitData);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {product ? 'Editar Producto' : 'Crear Nuevo Producto'}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título *</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              isInvalid={!!errors.title}
              placeholder="Ingrese el título del producto"
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              isInvalid={!!errors.price}
              placeholder="0.00"
              step="0.01"
              min="0"
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
              placeholder="Ingrese la descripción del producto"
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
            >
              <option value={1}>Clothes</option>
              <option value={2}>Electronics</option>
              <option value={3}>Furniture</option>
              <option value={4}>Shoes</option>
              <option value={5}>Others</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              type="url"
              value={formData.images[0] || ''}
              onChange={handleImageChange}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <Form.Text className="text-muted">
              Si no se proporciona una imagen, se usará una imagen por defecto
            </Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onHide} disabled={loading}>
              Cancelar
            </Button>
            <Button 
              variant="primary" 
              type="submit" 
              disabled={loading}
            >
              {loading ? 'Guardando...' : (product ? 'Actualizar' : 'Crear')}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductForm;
