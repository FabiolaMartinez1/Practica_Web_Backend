#### Documentación en Documentation.md

# BDD Sakila
```
mysql --user=userdb --password

Contraseña: 123456
```

# Instrucciones para crear un backend para la tabla "actor"

Este proyecto consiste en la creación de un backend para la tabla "actor" utilizando Express.js para Node.js y PHP. Este backend proporcionará operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para la tabla "actor". Puedes elegir el lenguaje de programación (Node.js con Express o PHP) que prefieras o realizar ambas implementaciones si lo deseas.

## Creación de una Base de Datos

1. Configura una base de datos (por ejemplo, MySQL) para almacenar información sobre actores.
2. Crea una tabla llamada "actor" con campos como "actor_id", "first_name", "last_name", etc.

## Express.js (Node.js) Backend

1. Crea un servidor Express.js que se conecte a la base de datos.
2. Implementa rutas y controladores para realizar operaciones CRUD en la tabla "actor".
3. Las rutas pueden ser como /actors (obtener todos los actores), /actors/:id (obtener actor por ID), /actors (crear actor nuevo), /actors/:id (actualizar actor por ID), y /actors/:id (eliminar actor por ID).

## PHP Backend

1. Crea un archivo PHP que se conecte a la misma base de datos.
2. Implementa scripts PHP para realizar operaciones CRUD en la tabla "actor".
3. Los scripts PHP pueden ser como get_actors.php (obtener todos los actores), get_actor.php?id=<actor_id> (obtener actor por ID), create_actor.php (crear actor nuevo), update_actor.php?id=<actor_id> (actualizar actor por ID), y delete_actor.php?id=<actor_id> (eliminar actor por ID).

## Validación de Datos

1. Asegúrate de que los datos ingresados sean válidos y que se realice la validación adecuada antes de realizar cualquier operación de base de datos.

## Documentación

1. Proporciona una documentación clara para las API creadas, incluyendo la descripción de las rutas, los parámetros necesarios y las respuestas esperadas.

## Pruebas

1. Prueba las rutas y las operaciones CRUD en el backend para asegurarte de que funcionen correctamente.

## Seguridad

1. Considera medidas de seguridad como la prevención de SQL injection y la autenticación si es necesario.

## Dificultad Adicional (puntos extra)

1. Si deseas un desafío adicional, puedes implementar paginación para obtener un número limitado de registros a la vez en la ruta /actors.

## Entrega

1. Entrega el código fuente y la documentación en un repositorio de GitHub o en un archivo comprimido.

Este proyecto te proporciona la oportunidad de practicar la creación de un backend en dos lenguajes de programación diferentes (Node.js y PHP) y te ayudará a comprender mejor cómo construir servicios web para interactuar con una base de datos.
