# Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL

El sistema de gestión de inventarios de una tienda online requiere la implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en bases de datos SQL y NoSQL. Los datos incluyen productos con campos como nombre, precio, stock y categoría. La tienda necesita garantizar la integridad de los datos, evitando nombres duplicados y precios negativos. Además, el sistema debe manejar correctamente los errores y casos borde, como intentos de eliminar productos no existentes o actualizar stock a valores inválidos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | operaciones-crud-sql-nosql |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración Inicial y Creación de Registros

**Objetivo:** Implementar la funcionalidad básica para crear registros de productos en bases de datos SQL y NoSQL.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Diseña y crea la estructura de datos para productos en bases de datos SQL y NoSQL.
- Implementa la funcionalidad para crear nuevos productos, asegurando que los nombres sean únicos y los precios no sean negativos.

**Entregable:** Especificación de la estructura de datos y código para crear productos en bases de datos SQL y NoSQL.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las diferencias entre bases de datos SQL y NoSQL al diseñar la estructura de datos.
- Utiliza el IntelliJ IDEA Debugger para depurar y verificar la correcta implementación de la creación de productos.

</details>

### Fase 2: Lectura y Actualización de Registros

**Objetivo:** Implementar funcionalidades para leer y actualizar registros de productos en bases de datos SQL y NoSQL.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa la funcionalidad para leer productos por nombre o ID.
- Implementa la funcionalidad para actualizar productos, asegurando que los cambios en el stock y el precio sigan las reglas de validación.

**Entregable:** Código para leer y actualizar productos en bases de datos SQL y NoSQL.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los diferentes métodos de consulta y actualización en bases de datos SQL y NoSQL.
- Utiliza el IntelliJ IDEA Debugger para depurar y verificar la correcta implementación de la lectura y actualización de productos.

</details>

### Fase 3: Eliminación de Registros y Manejo de Errores

**Objetivo:** Implementar la funcionalidad para eliminar registros de productos y manejar correctamente los errores y casos borde.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa la funcionalidad para eliminar productos por nombre o ID.
- Maneja correctamente los errores y casos borde, como intentos de eliminar productos no existentes o actualizar stock a valores inválidos.

**Entregable:** Código para eliminar productos en bases de datos SQL y NoSQL, incluyendo manejo de errores y casos borde.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las mejores prácticas para eliminar registros en bases de datos SQL y NoSQL.
- Utiliza el IntelliJ IDEA Debugger para depurar y verificar la correcta implementación de la eliminación de productos y el manejo de errores.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las operaciones CRUD y por qué son importantes en el manejo de bases de datos?
- **paraQueSirve**: ¿Para qué sirve implementar operaciones CRUD en bases de datos SQL y NoSQL en el contexto de una tienda online?
- **comoSeUsa**: ¿Cómo se usan las operaciones CRUD en la práctica para mantener la integridad de los datos en una base de datos?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar operaciones CRUD y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica implementar operaciones CRUD en bases de datos SQL y NoSQL, y cómo afectan al diseño del sistema?

## Criterios de Evaluacion

- Implementación correcta de la creación de productos en bases de datos SQL y NoSQL, asegurando la unicidad de nombres y precios no negativos.
- Implementación correcta de la lectura de productos por nombre o ID en bases de datos SQL y NoSQL.
- Implementación correcta de la actualización de productos en bases de datos SQL y NoSQL, siguiendo las reglas de validación.
- Implementación correcta de la eliminación de productos en bases de datos SQL y NoSQL, manejando correctamente los errores y casos borde.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

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

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
