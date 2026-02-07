Prueba Técnica – Backend CRUD de Alumnos 🧪📚

Este repositorio contiene el desarrollo del backend correspondiente a una prueba técnica, cuyo objetivo fue implementar el mantenimiento de alumnos (CRUD) utilizando Node.js y una base de datos PostgreSQL.

La validación y pruebas de los endpoints se realizaron mediante Postman.

🎯 Objetivo de la prueba

Crear un sistema backend que permita:

Crear alumnos

Editar información de alumnos

Eliminar alumnos

Mostrar la información almacenada

Todo esto utilizando una base de datos relacional y exponiendo los datos a través de una API.

🛠️ Tecnologías utilizadas

Node.js – Lógica del servidor

Express.js – Manejo de rutas y API REST

PostgreSQL – Base de datos relacional

Postman – Pruebas de los endpoints

🗄️ Estructura de la base de datos

Se creó la tabla alumno con la siguiente estructura:

Campo	Tipo	Descripción
codigo	VARCHAR	Clave primaria del alumno
apellido_paterno	VARCHAR	Apellido paterno
apellido_materno	VARCHAR	Apellido materno
nombres	VARCHAR	Nombres del alumno
direccion	VARCHAR	Dirección
fecha_nacimiento	DATE	Fecha de nacimiento
edad	INTEGER	Generada automáticamente según la fecha de nacimiento

El campo edad se calcula automáticamente a partir de la fecha de nacimiento.

📌 Alcance

✅ Backend funcional

✅ API REST

❌ No incluye frontend

👨‍💻 Autor

Jhonatan Barja

Prueba técnica desarrollada con fines evaluativos y de aprendizaje.
