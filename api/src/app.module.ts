import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './application/product.service';
import { ProductController } from './infrastructure/controllers/product.controller';
import { ProductSqlRepository } from './infrastructure/repositories/product-sql.repository';
import { ProductNosqlRepository } from './infrastructure/repositories/product-nosql.repository';
import { ProductDynamodbRepository } from './infrastructure/repositories/product-dynamodb.repository';
import { ProductRepositoryInterface } from './infrastructure/repositories/product.repository.interface';
import { Product } from './domain/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'postgres'),
        database: configService.get<string>('DB_NAME', 'products_db'),
        entities: [Product],
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE', true),
        logging: configService.get<boolean>('DB_LOGGING', false),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI', 'mongodb://localhost:27017/products'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: 'ProductRepositoryInterface',
      useFactory: (configService: ConfigService): ProductRepositoryInterface => {
        const dbType = configService.get<string>('DB_TYPE', 'sql');

        if (dbType === 'dynamodb') {
          return new ProductDynamodbRepository();
        } else if (dbType === 'nosql') {
          return new ProductNosqlRepository();
        } else {
          return new ProductSqlRepository();
        }
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}