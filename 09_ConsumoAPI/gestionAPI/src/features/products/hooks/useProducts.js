import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener todos los productos
  const fetchProducts = () => {
    setLoading(true);
    setError(null);
    
    productService.getAllProducts()
      .then(data => {
        // Limitar a los primeros 20 productos para mejor rendimiento
        setProducts(data.slice(0, 20));
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Crear producto
  const createProduct = (productData) => {
    setLoading(true);
    setError(null);

    return productService.createProduct(productData)
      .then(newProduct => {
        setProducts(prevProducts => [newProduct, ...prevProducts]);
        return newProduct;
      })
      .catch(err => {
        setError(err.message);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Actualizar producto
  const updateProduct = (id, productData) => {
    setLoading(true);
    setError(null);

    return productService.updateProduct(id, productData)
      .then(updatedProduct => {
        setProducts(prevProducts => 
          prevProducts.map(product => 
            product.id === id ? updatedProduct : product
          )
        );
        return updatedProduct;
      })
      .catch(err => {
        setError(err.message);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Eliminar producto
  const deleteProduct = (id) => {
    setLoading(true);
    setError(null);

    return productService.deleteProduct(id)
      .then(() => {
        setProducts(prevProducts => 
          prevProducts.filter(product => product.id !== id)
        );
      })
      .catch(err => {
        setError(err.message);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Cargar productos al inicializar el hook
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct
  };
};
