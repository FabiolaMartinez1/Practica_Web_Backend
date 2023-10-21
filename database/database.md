### Contenedor en ejecución:
Si tu contenedor no está actualmente en ejecución, primero inícialo con:
```
docker-compose up -d
```

### Conectarte al servidor MySQL:
Utiliza el siguiente comando para conectarte al servidor MySQL dentro de tu contenedor:
```
docker exec -it sakila-container mysql -u root -proot_password
```

### Crear el usuario y otorgar permisos:
Dentro del shell de MySQL, ejecuta los siguientes comandos SQL para crear un nuevo usuario y otorgarle permisos:

```
CREATE USER 'new_username'@'%' IDENTIFIED BY 'new_password';
GRANT ALL PRIVILEGES ON sakila.* TO 'new_username'@'%';
FLUSH PRIVILEGES;

```

### Otorgar todos los privilegios en la base de datos sakila al usuario userdb.
Por lo tanto, en términos de permisos, para el usuario userdb, será algo como:
```
GRANT ALL PRIVILEGES ON sakila.* TO 'userdb'@'%';
```

### Enlistar los usuarios y sus privilegios:

* Para ver todos los usuarios y sus hosts:
```
SELECT user, host FROM mysql.user;
```

* Para ver los privilegios específicos de cada usuario:
```
SHOW GRANTS FOR 'nombre_usuario'@'host';
```

### Eliminar el usuario:
Utiliza el siguiente comando SQL para eliminar el usuario:
```
DROP USER 'nombre_usuario'@'host';
```

### Salir de MySQL y del contenedor:
Simplemente tipea exit para salir del shell de MySQL y luego otra vez exit si es necesario para salir del contenedor.