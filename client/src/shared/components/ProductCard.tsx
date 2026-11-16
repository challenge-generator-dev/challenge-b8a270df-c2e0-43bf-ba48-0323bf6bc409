import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
  };
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete, onEdit }) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <h3>{product.name}</h3>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-body">
        <p>Precio: ${product.price.toFixed(2)}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <div className="product-actions">
        {onEdit && (
          <button onClick={() => onEdit(product.id)} className="edit-button">
            Editar
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(product.id)} className="delete-button">
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;