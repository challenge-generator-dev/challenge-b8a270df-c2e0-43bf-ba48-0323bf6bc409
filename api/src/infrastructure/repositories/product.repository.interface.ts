import { Product } from '../../domain/product.entity';

export interface ProductRepositoryInterface {
  create(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  update(product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}