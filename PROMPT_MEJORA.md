# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/infrastructure/repositories/product-sql.repository.ts` — La fase "Configuración Inicial y Creación de Registros" se implementa aqui: este archivo es el ejercicio.
- `api/src/infrastructure/repositories/product-nosql.repository.ts` — La fase "Lectura y Actualización de Registros" se implementa aqui: este archivo es el ejercicio.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML), Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

### Reto
- Tema: operaciones-crud-sql-nosql
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración Inicial y Creación de Registros — objetivo: Implementar la funcionalidad básica para crear registros de productos en bases de datos SQL y NoSQL. — entregable (NO resolver): Especificación de la estructura de datos y código para crear productos en bases de datos SQL y NoSQL.
- Fase 2: Lectura y Actualización de Registros — objetivo: Implementar funcionalidades para leer y actualizar registros de productos en bases de datos SQL y NoSQL. — entregable (NO resolver): Código para leer y actualizar productos en bases de datos SQL y NoSQL.
- Fase 3: Eliminación de Registros y Manejo de Errores — objetivo: Implementar la funcionalidad para eliminar registros de productos y manejar correctamente los errores y casos borde. — entregable (NO resolver): Código para eliminar productos en bases de datos SQL y NoSQL, incluyendo manejo de errores y casos borde.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1169.0",
    "@aws-sdk/util-dynamodb": "3.996.9",
    "@nestjs/common": "10.4.22",
    "@nestjs/config": "4.0.4",
    "@nestjs/core": "10.4.22",
    "@nestjs/mongoose": "11.0.4",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "@nestjs/typeorm": "12.0.3",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "pg": "8.23.1",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/product.entity.ts ===
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class Product {
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsString()
  category: string;

  constructor(id: string, name: string, price: number, stock: number, category: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }
}

// === ARCHIVO: api/src/application/product.service.ts ===
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

// === ARCHIVO: api/src/infrastructure/repositories/product.repository.interface.ts ===
import { Product } from '../../domain/product.entity';

export interface ProductRepositoryInterface {
  create(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  update(product: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}

// === ARCHIVO: api/src/infrastructure/repositories/product-sql.repository.ts ===
// TODO(reto): Implementar la persistencia en SQL usando TypeORM
import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/product.entity';
import { ProductRepositoryInterface } from './product.repository.interface';

@Injectable()
export class ProductSqlRepository implements ProductRepositoryInterface {
  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar lógica para crear producto en SQL
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar lógica para buscar producto por ID en SQL
    throw new Error('Method not implemented');
  }

  async findByName(name: string): Promise<Product | null> {
    // TODO(reto): Implementar lógica para buscar producto por nombre en SQL
    throw new Error('Method not implemented');
  }

  async update(product: Product): Promise<Product> {
    // TODO(reto): Implementar lógica para actualizar producto en SQL
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar lógica para eliminar producto en SQL
    throw new Error('Method not implemented');
  }
}

// === ARCHIVO: api/src/infrastructure/repositories/product-nosql.repository.ts ===
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

// === ARCHIVO: api/src/infrastructure/repositories/product-dynamodb.repository.ts ===
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

// === ARCHIVO: api/src/infrastructure/dto/create-product.dto.ts ===
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsString()
  category: string;

  constructor(name: string, price: number, stock: number, category: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }
}

// === ARCHIVO: api/src/infrastructure/dto/update-product.dto.ts ===
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

// === ARCHIVO: api/src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Product Management API')
    .setDescription('API for managing products in inventory')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation available at: http://localhost:${port}/docs`);
}

bootstrap();

// === ARCHIVO: api/src/app.module.ts ===
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

// === ARCHIVO: api/src/infrastructure/controllers/product.controller.ts ===
import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ProductService } from '../../application/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../../domain/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({ status: 201, description: 'Product created successfully', type: Product })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 409, description: 'Conflict - product with this name already exists' })
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID', type: String })
  @ApiResponse({ status: 200, description: 'Product found', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  @ApiParam({ name: 'id', description: 'Product ID', type: String })
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({ status: 200, description: 'Product updated successfully', type: Product })
  @ApiResponse({ status: 400, description: 'Bad request - invalid input data' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiParam({ name: 'id', description: 'Product ID', type: String })
  @ApiResponse({ status: 204, description: 'Product deleted successfully' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}

// === ARCHIVO: client/src/main.tsx ===
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

// === ARCHIVO: client/package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@tanstack/react-query": "5.107.1",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: client/vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: client/index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: client/src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: client/src/shared/components/ProductCard.tsx ===
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

// === ARCHIVO: client/src/services/product.service.ts ===
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

// === ARCHIVO: client/src/features/products/ProductList.tsx ===
import { useState, useEffect } from 'react';
import { Product, productService } from '../../services/product.service';
import ProductCard from '../../shared/components/ProductCard';
import { ProductForm } from './ProductForm';
import './ProductList.css';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const productList: Product[] = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        try {
          const product = await productService.getProductById(page.toString());
          if (product) {
            productList.push(product);
            page++;
          } else {
            hasMore = false;
          }
        } catch {
          hasMore = false;
        }
      }

      setProducts(productList);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await productService.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar producto');
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = async (id: string, data: Partial<Product>) => {
    try {
      await productService.updateProduct(id, data);
      setProducts(prev =>
        prev.map(p => (p.id === id ? { ...p, ...data } : p))
      );
      setEditingId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar producto');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  if (loading) {
    return (
      <div className="product-list-container">
        <div className="loading-spinner">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-container">
        <div className="error-message">{error}</div>
        <button onClick={fetchProducts} className="retry-button">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Lista de Productos</h2>
      <button onClick={fetchProducts} className="refresh-button">
        Actualizar
      </button>

      {products.length === 0 ? (
        <div className="empty-state">No hay productos disponibles</div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {editingId && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Editar Producto</h3>
            <ProductForm
              product={products.find(p => p.id === editingId)}
              onSave={(data) => handleSave(editingId, data)}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// === ARCHIVO: client/src/features/products/ProductForm.tsx ===
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

// === ARCHIVO: client/src/features/products/ProductList.css ===
.product-list-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-list-title {
  font-size: 28px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: #666;
  background: #f5f5f5;
  border-radius: 8px;
}

.error-message {
  padding: 16px;
  background: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  margin-bottom: 16px;
}

.retry-button,
.refresh-button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.retry-button:hover,
.refresh-button:hover {
  background: #2563eb;
}

.refresh-button {
  margin-bottom: 20px;
}

.empty-state {
  text-align: center;
  padding: 48px;
  background: #f9fafb;
  border-radius: 8px;
  color: #6b7280;
  font-size: 16px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.edit-modal-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.edit-modal-content h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: #1a1a2e;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.form-group input,
.form-group select {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group input:disabled,
.form-group select:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
}

.form-group input.input-error,
.form-group select.input-error {
  border-color: #dc2626;
}

.form-group input.input-error:focus,
.form-group select.input-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.field-error {
  font-size: 12px;
  color: #dc2626;
}

.form-error {
  padding: 12px;
  background: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #dc2626;
  font-size: 14px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.submit-button,
.cancel-button {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button {
  background: #10b981;
  color: white;
}

.submit-button:hover:not(:disabled) {
  background: #059669;
}

.submit-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.cancel-button {
  background: #6b7280;
  color: white;
}

.cancel-button:hover:not(:disabled) {
  background: #4b5563;
}

.cancel-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

// === ARCHIVO: client/src/features/products/ProductForm.css ===
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.form-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a4a68;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #1a1a2e;
  background-color: #f8f9fa;
  border: 2px solid #e0e0e6;
  border-radius: 8px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  background-color: #ffffff;
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-input.error {
  border-color: #ef4444;
}

.form-input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

.form-error {
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.375rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.form-button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.form-button:active {
  transform: scale(0.98);
}

.form-button.primary {
  background-color: #4f46e5;
  color: #ffffff;
}

.form-button.primary:hover {
  background-color: #4338ca;
}

.form-button.primary:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.form-button.secondary {
  background-color: #e5e7eb;
  color: #4b5563;
}

.form-button.secondary:hover {
  background-color: #d1d5db;
}

.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #1a1a2e;
  background-color: #f8f9fa;
  border: 2px solid #e0e0e6;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
}

.form-select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  background-color: #ffffff;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .form-container {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }

  .form-button {
    width: 100%;
  }
}

// === ARCHIVO: client/src/shared/components/ProductCard.css ===
.product-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-header {
  padding: 1.25rem;
  border-bottom: 1px solid #f0f0f5;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.4;
}

.product-category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  background-color: #f3f4f6;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.product-body {
  padding: 1.25rem;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-detail-label {
  font-size: 0.875rem;
  color: #6b7280;
}

.product-detail-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a2e;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
}

.product-price::before {
  content: '$';
  font-size: 1rem;
  vertical-align: super;
  margin-right: 0.125rem;
}

.product-stock {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stock-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.stock-indicator.high {
  background-color: #10b981;
}

.stock-indicator.medium {
  background-color: #f59e0b;
}

.stock-indicator.low {
  background-color: #ef4444;
}

.stock-indicator.out {
  background-color: #6b7280;
}

.product-stock-label {
  font-size: 0.875rem;
  color: #6b7280;
}

.product-stock-value {
  font-weight: 600;
  color: #1a1a2e;
}

.product-actions {
  padding: 1rem 1.25rem;
  background-color: #f9fafb;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.action-button {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.action-button:active {
  transform: scale(0.96);
}

.action-button.edit {
  background-color: #e0e7ff;
  color: #4f46e5;
}

.action-button.edit:hover {
  background-color: #c7d2fe;
}

.action-button.delete {
  background-color: #fee2e2;
  color: #dc2626;
}

.action-button.delete:hover {
  background-color: #fecaca;
}

.product-card.loading {
  pointer-events: none;
  opacity: 0.7;
}

.product-card.error {
  border: 2px solid #fee2e2;
}

@media (max-width: 640px) {
  .product-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .product-actions {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
  }
}

// === ARCHIVO: .run/api.run.xml ===
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="api" type="js.build_tools.npm" nameIsGenerated="false">
    <package-json value="$PROJECT_DIR$/api/package.json" />
    <command value="run" />
    <scripts>
      <script value="start" />
    </scripts>
    <node-interpreter value="project" />
    <envs>
      <env name="DYNAMODB_ENDPOINT" value="http://localhost:8000" />
      <env name="AWS_REGION" value="us-east-1" />
      <env name="AWS_ACCESS_KEY_ID" value="local" />
      <env name="AWS_SECRET_ACCESS_KEY" value="local" />
      <env name="MONGODB_URI" value="mongodb://localhost:27017/app" />
      <env name="DYNAMODB_TABLE_NAME" value="Products" />
    </envs>
    <method v="2" />
  </configuration>
</component>


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s
  mongo:
    image: "mongo:7.0.14"
    ports:
      - "127.0.0.1:27017:27017"
    environment:
      MONGO_INITDB_DATABASE: "app"
    volumes:
      - "./infra-local/mongo/init.js:/docker-entrypoint-initdb.d/init.js:ro"
    healthcheck:
      test: ["CMD","mongosh","--quiet","--eval","db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 20s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |
| MongoDB | `mongo:7.0.14` | 27017 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.

Tablas de DynamoDB: `Products` (pk `id`).


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "Products" "id"


// === ARCHIVO: infra-local/mongo/init.js ===
// Se ejecuta una sola vez al crear el volumen de MongoDB (docker-entrypoint-initdb.d).
db = db.getSiblingDB('app');
db.createCollection('items');
db.items.createIndex({ name: 1 });

```
