import { Injectable } from '@nestjs/common';
import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
  ReturnValue,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { Product } from '../../domain/product.entity';
import { ProductRepositoryInterface } from './product.repository.interface';

@Injectable()
export class ProductDynamodbRepository implements ProductRepositoryInterface {
  private readonly client: DynamoDBClient;
  private readonly tableName: string = process.env.DYNAMODB_TABLE_NAME || 'Products';

  constructor() {
    this.client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
  }

  async create(product: Product): Promise<Product> {
    const params = {
      TableName: this.tableName,
      Item: marshall({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
      }),
    };

    await this.client.send(new PutItemCommand(params));
    return product;
  }

  async findById(id: string): Promise<Product | null> {
    const params = {
      TableName: this.tableName,
      Key: marshall({ id }),
    };

    const result = await this.client.send(new GetItemCommand(params));
    if (!result.Item) {
      return null;
    }

    const item = unmarshall(result.Item);
    return new Product(item.id, item.name, item.price, item.stock, item.category);
  }

  async findByName(name: string): Promise<Product | null> {
    throw new Error('findByName not implemented for DynamoDB without GSI');
  }

  async update(product: Product): Promise<Product> {
    const params = {
      TableName: this.tableName,
      Key: marshall({ id: product.id }),
      UpdateExpression: 'SET #name = :name, price = :price, stock = :stock, category = :category',
      ExpressionAttributeNames: {
        '#name': 'name',
      },
      ExpressionAttributeValues: marshall({
        ':name': product.name,
        ':price': product.price,
        ':stock': product.stock,
        ':category': product.category,
      }),
      ReturnValues: 'ALL_NEW' as ReturnValue,
    };

    const result = await this.client.send(new UpdateItemCommand(params));
    const attributes = result.Attributes;
    if (!attributes) {
      throw new Error('Failed to update product: no attributes returned');
    }
    const item = unmarshall(attributes);
    return new Product(item.id, item.name, item.price, item.stock, item.category);
  }

  async delete(id: string): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: marshall({ id }),
    };

    await this.client.send(new DeleteItemCommand(params));
  }
}