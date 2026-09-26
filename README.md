# 📦 API de Inventarios

API REST para la gestión de productos, desarrollada con **Node.js, Express, TypeScript y PostgreSQL**.

Permite crear, consultar, actualizar y eliminar productos, gestionando información como nombre, precio y disponibilidad.

## 🛠️ Tecnologías

* Node.js
* Express
* TypeScript
* PostgreSQL
* Sequelize
* Supertest
* Swagger
* Postman

## ✨ Funcionalidades

* Crear productos
* Consultar productos
* Consultar un producto por ID
* Actualizar productos
* Eliminar productos
* Gestionar precio y disponibilidad
* Validación de datos
* Documentación de API con Swagger
* Pruebas de endpoints con Supertest

## 📦 Producto

Ejemplo de los datos enviados a la API:

```json
{
  "name": "Teclado mecánico",
  "price": 150000,
  "availability": true
}
```

## 🔌 Endpoints

| Método   | Endpoint        | Descripción                 |
| -------- | --------------- | --------------------------- |
| `GET`    | `api/products`     | Obtener todos los productos |
| `GET`    | `api/products/:id` | Obtener un producto         |
| `POST`   | `api/products`     | Crear un producto           |
| `PUT`    | `api/products/:id` | Actualizar un producto      |
| `PATCH`  | `api/products/:id` | Actualizar disponibilidad    |
| `DELETE` | `api/products/:id` | Eliminar un producto        |

## 🗄️ Base de datos

El proyecto utiliza **PostgreSQL** como base de datos y **Sequelize** como ORM para la gestión de modelos y consultas.

## 📖 Documentación

La API está documentada utilizando **Swagger**, permitiendo consultar y probar los diferentes endpoints.

📚 Objetivo del proyecto

Este proyecto fue desarrollado como parte de mi proceso de aprendizaje y práctica en desarrollo backend y full-stack.

El objetivo principal fue trabajar conceptos como:

* Diseño de APIs REST
* Arquitectura backend
* Operaciones CRUD
* Bases de datos relacionales
* ORM con Sequelize
* Manejo de modelos
* Testing de APIs
* Documentación con Swagger
* Comunicación entre frontend y backend
* Manejo de peticiones HTTP y datos JSON
