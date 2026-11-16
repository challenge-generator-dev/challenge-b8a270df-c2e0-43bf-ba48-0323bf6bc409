import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface CreateProductDto {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
}

const createProduct = async (productData: CreateProductDto): Promise<Product> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al crear el producto');
    }
    throw new Error('Error desconocido al crear el producto');
  }
};

const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al obtener el producto');
    }
    throw new Error('Error desconocido al obtener el producto');
  }
};

const updateProduct = async (id: string, productData: UpdateProductDto): Promise<Product> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al actualizar el producto');
    }
    throw new Error('Error desconocido al actualizar el producto');
  }
};

const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al eliminar el producto');
    }
    throw new Error('Error desconocido al eliminar el producto');
  }
};

export const productService = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};

export class ProductService {
  async createProduct(productData: CreateProductDto): Promise<Product> {
    return createProduct(productData);
  }

  async getProductById(id: string): Promise<Product> {
    return getProductById(id);
  }

  async updateProduct(id: string, productData: UpdateProductDto): Promise<Product> {
    return updateProduct(id, productData);
  }

  async deleteProduct(id: string): Promise<void> {
    return deleteProduct(id);
  }
}