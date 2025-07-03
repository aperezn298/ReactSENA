const API_BASE_URL = 'https://api.escuelajs.co/api/v1/products';

export const productService = {
  // Obtener todos los productos
  getAllProducts: () => {
    return fetch(API_BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  // Obtener un producto por ID
  getProductById: (id) => {
    return fetch(`${API_BASE_URL}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener el producto');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  // Crear un nuevo producto
  createProduct: (productData) => {
    return fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al crear el producto');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  // Actualizar un producto
  updateProduct: (id, productData) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al actualizar el producto');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  // Eliminar un producto
  deleteProduct: (id) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el producto');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
};
