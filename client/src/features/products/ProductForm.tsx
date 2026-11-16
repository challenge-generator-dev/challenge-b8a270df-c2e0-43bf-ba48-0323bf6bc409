import { useState, useEffect } from 'react';
import { Product, CreateProductDto, UpdateProductDto } from '../../services/product.service';

interface ProductFormProps {
  product?: Product;
  onSave: (data: CreateProductDto | UpdateProductDto) => void;
  onCancel: () => void;
}

export function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price?.toString() || '');
  const [stock, setStock] = useState(product?.stock?.toString() || '');
  const [category, setCategory] = useState(product?.category || '');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price.toString());
      setStock(product.stock.toString());
      setCategory(product.category);
    }
  }, [product]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    } else if (name.length > 100) {
      newErrors.name = 'El nombre no puede exceder 100 caracteres';
    }

    const priceNum = parseFloat(price);
    if (!price || isNaN(priceNum)) {
      newErrors.price = 'El precio es requerido';
    } else if (priceNum < 0) {
      newErrors.price = 'El precio no puede ser negativo';
    } else if (priceNum > 999999.99) {
      newErrors.price = 'El precio excede el limite permitido';
    }

    const stockNum = parseInt(stock, 10);
    if (!stock || isNaN(stockNum)) {
      newErrors.stock = 'El stock es requerido';
    } else if (stockNum < 0) {
      newErrors.stock = 'El stock no puede ser negativo';
    } else if (stockNum > 999999) {
      newErrors.stock = 'El stock excede el limite permitido';
    }

    if (!category.trim()) {
      newErrors.category = 'La categoria es requerida';
    } else if (category.length > 50) {
      newErrors.category = 'La categoria no puede exceder 50 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data: CreateProductDto | UpdateProductDto = {
        name: name.trim(),
        price: parseFloat(price),
        stock: parseInt(stock, 10),
        category: category.trim(),
      };

      onSave(data);
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : 'Error al guardar' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      {errors.form && <div className="form-error">{errors.form}</div>}

      <div className="form-group">
        <label htmlFor="name">Nombre del Producto</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          disabled={isSubmitting}
          className={errors.name ? 'input-error' : ''}
          placeholder="Ingrese el nombre del producto"
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => handleChange(e, setPrice)}
          disabled={isSubmitting}
          step="0.01"
          min="0"
          max="999999.99"
          className={errors.price ? 'input-error' : ''}
          placeholder="0.00"
        />
        {errors.price && <span className="field-error">{errors.price}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={stock}
          onChange={(e) => handleChange(e, setStock)}
          disabled={isSubmitting}
          min="0"
          max="999999"
          className={errors.stock ? 'input-error' : ''}
          placeholder="0"
        />
        {errors.stock && <span className="field-error">{errors.stock}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => handleChange(e, setCategory)}
          disabled={isSubmitting}
          className={errors.category ? 'input-error' : ''}
        >
          <option value="">Seleccione una categoria</option>
          <option value="electronica">Electronica</option>
          <option value="ropa">Ropa</option>
          <option value="alimentos">Alimentos</option>
          <option value="hogar">Hogar</option>
          <option value="deportes">Deportes</option>
          <option value="libros">Libros</option>
          <option value="juguetes">Juguetes</option>
          <option value="otro">Otro</option>
        </select>
        {errors.category && <span className="field-error">{errors.category}</span>}
      </div>

      <div className="form-actions">
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Guardando...' : product ? 'Actualizar' : 'Crear'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="cancel-button"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}