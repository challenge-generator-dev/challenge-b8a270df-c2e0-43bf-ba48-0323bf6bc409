import { Injectable, NotFoundException, ConflictException, Inject } from '@nestjs/common';
import { Product } from '../domain/product.entity';
import { ProductRepositoryInterface } from '../infrastructure/repositories/product.repository.interface';
import { CreateProductDto } from '../infrastructure/dto/create-product.dto';
import { UpdateProductDto } from '../infrastructure/dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(@Inject('ProductRepositoryInterface') private readonly productRepository: ProductRepositoryInterface) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const existingProduct = await this.productRepository.findByName(createProductDto.name);
    if (existingProduct) {
      throw new ConflictException('Product with this name already exists');
    }

    const product = new Product(
      this.generateId(),
      createProductDto.name,
      createProductDto.price,
      createProductDto.stock,
      createProductDto.category
    );

    return this.productRepository.create(product);
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const existingProduct = await this.productRepository.findById(id);
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    if (updateProductDto.name) {
      const productWithSameName = await this.productRepository.findByName(updateProductDto.name);
      if (productWithSameName && productWithSameName.id !== id) {
        throw new ConflictException('Product with this name already exists');
      }
    }

    const updatedProduct = new Product(
      id,
      updateProductDto.name ?? existingProduct.name,
      updateProductDto.price ?? existingProduct.price,
      updateProductDto.stock ?? existingProduct.stock,
      updateProductDto.category ?? existingProduct.category
    );

    return this.productRepository.update(updatedProduct);
  }

  async deleteProduct(id: string): Promise<void> {
    const existingProduct = await this.productRepository.findById(id);
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.delete(id);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}