import { IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  category?: string;

  constructor(
    name?: string,
    price?: number,
    stock?: number,
    category?: string
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }
}