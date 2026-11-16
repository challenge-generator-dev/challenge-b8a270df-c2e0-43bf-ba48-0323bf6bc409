import { useState, useEffect } from 'react';
import { Product, productService } from '../../services/product.service';
import ProductCard from '../../shared/components/ProductCard';
import { ProductForm } from './ProductForm';
import './ProductList.css';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const productList: Product[] = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        try {
          const product = await productService.getProductById(page.toString());
          if (product) {
            productList.push(product);
            page++;
          } else {
            hasMore = false;
          }
        } catch {
          hasMore = false;
        }
      }

      setProducts(productList);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await productService.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar producto');
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = async (id: string, data: Partial<Product>) => {
    try {
      await productService.updateProduct(id, data);
      setProducts(prev =>
        prev.map(p => (p.id === id ? { ...p, ...data } : p))
      );
      setEditingId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar producto');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  if (loading) {
    return (
      <div className="product-list-container">
        <div className="loading-spinner">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-container">
        <div className="error-message">{error}</div>
        <button onClick={fetchProducts} className="retry-button">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Lista de Productos</h2>
      <button onClick={fetchProducts} className="refresh-button">
        Actualizar
      </button>

      {products.length === 0 ? (
        <div className="empty-state">No hay productos disponibles</div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {editingId && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Editar Producto</h3>
            <ProductForm
              product={products.find(p => p.id === editingId)}
              onSave={(data) => handleSave(editingId, data)}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
}