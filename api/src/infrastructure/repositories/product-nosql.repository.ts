// TODO(reto): Implementar la persistencia en NoSQL usando Mongoose
import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/product.entity';
import { ProductRepositoryInterface } from './product.repository.interface';

@Injectable()
export class ProductNosqlRepository implements ProductRepositoryInterface {
  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar lógica para crear producto en NoSQL
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar lógica para buscar producto por ID en NoSQL
    throw new Error('Method not implemented');
  }

  async findByName(name: string): Promise<Product | null> {
    // TODO(reto): Implementar lógica para buscar producto por nombre en NoSQL
    throw new Error('Method not implemented');
  }

  async update(product: Product): Promise<Product> {
    // TODO(reto): Implementar lógica para actualizar producto en NoSQL
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar lógica para eliminar producto en NoSQL
    throw new Error('Method not implemented');
  }
}