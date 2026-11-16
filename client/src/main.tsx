import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import { ProductList } from './features/products/ProductList';
import { ProductForm } from './features/products/ProductForm';
import { ProductService, CreateProductDto } from './services/product.service';

const queryClient = new QueryClient();

const productService = new ProductService();

const AddProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = async (data: CreateProductDto | { name?: string; price?: number; stock?: number; category?: string }) => {
    await productService.createProduct(data as CreateProductDto);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return <ProductForm onSave={handleSave} onCancel={handleCancel} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/add',
    element: <AddProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);