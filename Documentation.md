# API de Actores

## Tabla de contenidos

- [Introducción](#introducción)
- [Rutas](#rutas)
  - [Obtener todos los actores](#obtener-todos-los-actores)
  - [Obtener actor por ID](#obtener-actor-por-id)
  - [Crear actor nuevo](#crear-actor-nuevo)
  - [Actualizar actor por ID](#actualizar-actor-por-id)
  - [Eliminar actor por ID](#eliminar-actor-por-id)
  
## Introducción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la tabla "actor".

## Rutas

### **Obtener todos los actores**

- **URL:** `/actors`
- **Método:** `GET`
- **Parámetros de URL:** 
  - `limit` (opcional): Número de registros a devolver.
  - `offset` (opcional): Número de registros a saltar antes de comenzar a devolver registros.
- **Headers:** `Authorization: true`
- **Respuesta exitosa:** 
  - **Código:** 200 OK
  - **Contenido:** Lista de actores
- **Errores comunes:** 
  - **Código:** 403 FORBIDDEN. **Razón:** Acceso no autorizado.

### **Obtener actor por ID**

- **URL:** `/actors/:id`
- **Método:** `GET`
- **Parámetros de URL:** 
  - `id`: ID del actor.
- **Headers:** `Authorization: true`
- **Respuesta exitosa:** 
  - **Código:** 200 OK
  - **Contenido:** Detalles del actor solicitado.
- **Errores comunes:** 
  - **Código:** 403 FORBIDDEN. **Razón:** Acceso no autorizado.

### **Crear actor nuevo**

- **URL:** `/actors`
- **Método:** `POST`
- **Headers:** `Authorization: true`
- **Parámetros del cuerpo:** 
  - `first_name`: Nombre del actor (cadena de caracteres).
  - `last_name`: Apellido del actor (cadena de caracteres).
- **Respuesta exitosa:** 
  - **Código:** 200 OK
  - **Contenido:** `{ "actorId": <id del actor creado> }`
- **Errores comunes:** 
  - **Código:** 400 BAD REQUEST. **Razón:** Datos inválidos en el cuerpo de la solicitud.
  - **Código:** 403 FORBIDDEN. **Razón:** Acceso no autorizado.

### **Actualizar actor por ID**

- **URL:** `/actors/:id`
- **Método:** `PUT`
- **Headers:** `Authorization: true`
- **Parámetros de URL:** 
  - `id`: ID del actor.
- **Parámetros del cuerpo:** 
  - `first_name`: Nuevo nombre del actor (cadena de caracteres).
  - `last_name`: Nuevo apellido del actor (cadena de caracteres).
- **Respuesta exitosa:** 
  - **Código:** 200 OK
  - **Contenido:** `{ "success": true }`
- **Errores comunes:** 
  - **Código:** 400 BAD REQUEST. **Razón:** Datos inválidos en el cuerpo de la solicitud.
  - **Código:** 403 FORBIDDEN. **Razón:** Acceso no autorizado.

### **Eliminar actor por ID**

- **URL:** `/actors/:id`
- **Método:** `DELETE`
- **Headers:** `Authorization: true`
- **Parámetros de URL:** 
  - `id`: ID del actor.
- **Respuesta exitosa:** 
  - **Código:** 200 OK
  - **Contenido:** `{ "success": true }`
- **Errores comunes:** 
  - **Código:** 403 FORBIDDEN. **Razón:** Acceso no autorizado.
