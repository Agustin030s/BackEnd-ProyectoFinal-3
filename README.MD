# Paradise Hotel Resort 🏨🌴

En el mundo de la hospitalidad, cada detalle cuenta. Nuestro proyecto de backend, construido con Express y Node.js, es el motor detrás de una experiencia hotelera sin igual. Desde la reserva de habitaciones hasta el servicio personalizado, nuestro sistema se asegura de que cada huésped se sumerja en una experiencia excepcional. Con una arquitectura robusta y eficiente, facilitamos la gestión de reservas y la comunicación fluida entre el personal y los huéspedes. Bienvenido a un viaje donde la comodidad y la excelencia se unen, gracias a nuestra plataforma de backend que impulsa la magia detrás de cada estancia inolvidable.

## Caracteristicas del proyecto ⚙️

### Funcionalidades 🛠️

- **Control de Habitaciones**: Descubre las rutas diseñadas para facilitar la creación, modificación, obtención y eliminación de habitaciones en el hotel, asegurando un manejo eficiente de los recursos disponibles.
- **Control de Reservas**: Accede a las rutas dedicadas a la realización y cancelación de reservas de habitaciones, garantizando un proceso fluido y transparente para nuestros huéspedes.
- **Control de Usuarios**: Explora las rutas destinadas al registro, edición, obtención, inicio de sesión y eliminación de usuarios de la plataforma, proporcionando una experiencia integral y segura para nuestros clientes.
- **Validaciones**: Las rutas para crear, editar y eliminar recursos están protegidas mediante robustas validaciones implementadas con Json Web Token y Express Validator, asegurando la integridad y seguridad de los datos en todo momento.

### Administración de datos 📦

En el contexto de la administración de datos, aprovechamos la siguiente herramienta:

- **MongoDB Atlas**: Nuestra elección recae en MongoDB debido a su naturaleza como base de datos en la nube. Esta solución nos permite ejecutar consultas de manera eficiente y fluida, garantizando un funcionamiento sin contratiempos. Con MongoDB Atlas, tenemos la capacidad de gestionar nuestros datos de manera escalable y segura, respaldados por las características y la fiabilidad que ofrece esta plataforma en la nube.

### Librerias y Herramientas 📚

- [Node Js](https://nodejs.org/en): Un entorno de ejecución de JavaScript en el servidor, diseñado para construir aplicaciones escalables y de alta performance.
- [Nodemon](https://nodemon.io/): Una utilidad que monitorea los cambios en los archivos de un proyecto Node.js y automáticamente reinicia la aplicación.
- [MongoDB](https://www.mongodb.com/atlas/database): Base de datos NoSQL flexible y escalable, que utiliza documentos JSON para almacenar datos de manera eficiente. MongoDB Atlas proporciona una gestión simplificada en la nube.
- [Express](https://expressjs.com/es/starter/installing.html): Un framework de aplicaciones web para Node.js que proporciona una serie de características para facilitar la creación de aplicaciones web y APIs robustas y eficientes.
- [Mongoose](https://mongoosejs.com/): Una biblioteca de modelado de objetos para MongoDB en Node.js, diseñada para trabajar de forma sencilla y elegante con los documentos de la base de datos.
- [Express Validator](https://express-validator.github.io/docs/): Un middleware para Express que proporciona funciones de validación de datos y saneamiento de entradas de forma sencilla y flexible.
- [Bcrypt](https://www.npmjs.com/package/bcrypt): Una biblioteca de encriptación de contraseñas para Node.js, diseñada para ayudar en la protección de contraseñas mediante el uso de algoritmos de hash seguros.
- [Dotenv](https://www.npmjs.com/package/dotenv): Biblioteca que carga variables de entorno desde un archivo .env en aplicaciones Node.js, facilitando la gestión de configuraciones sensibles como claves API y contraseñas.
- [Cors](https://github.com/expressjs/cors#readme): Un middleware para Express que permite controlar el acceso a recursos desde diferentes orígenes en un servidor HTTP, facilitando la configuración de políticas de seguridad de acceso cruzado.
- [Morgan](https://github.com/expressjs/morgan): Un middleware para Express que proporciona un potente registrador de solicitudes HTTP para ayudar en la depuración y el análisis de la actividad del servidor.
- [Json Web Token](https://jwt.io/): Un estándar abierto que define un método compacto y autónomo para transmitir de forma segura información entre partes como un objeto JSON. Se utiliza comúnmente para la autenticación y la transferencia de datos entre servicios en una aplicación web.

## Rutas 🔧
En esta sección encontraras como trabajar con las distintas rutas que se encuentran en este proyecto: 
### Rutas Habitaciones 🏢
```
GET /rooms
GET /rooms/:id
GET /rooms/:categoria
POST /rooms
PUT /rooms/:id
DELETE /rooms/:id
```
### Rutas Usuarios 👥
```
GET /user
GET /user/obtenerEmail
POST /user/nuevo
POST /user
PUT /user/:id
DELETE /user/:id
```
### Rutas Reservas 📆
```
GET /reservation
GET /reservation/:id
GET /reservation/:numero
POST /reservation
DELETE /reservation/:id
```

## Ejecución del proyecto 🚀
Para la correcta ejecución del proyecto segui los siguientes pasos:

1. Debes clonar el repositorio de git en tu PC, dirigite al directorio donde desees que se guarde el codigo, una vez en el lugar abre una terminal y ejecuta el siguiente comando 

    ```git clone https://github.com/Agustin030s/BackEnd-ProyectoFinal-3.git```

2. Una vez que hayas clonado el repositorio, abres la carpeta con el proyecto en visual studio code, lo puedes hacer de la siguiente manera:

    - Buscar la carpeta donde clonaste el repositorio de Git.
    - Hacer click derecho sobre la carpeta.
    - Presionar "Abrir con Visual Studio Code" 

3. Ya dentro de VSC abre una terminal, es muy importante verificar en la terminal que te encuentras posicionado en la carpeta del proyecto, luego de verificar ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

    ```
    npm install
    ```

4. Luego de esto, en la raiz del proyecto deberas crear un archivo para las variables de entorno, que se llamara ".env" y colocaras las siguientes variables: 

    ```
    PORT=4001
    MONGODB_URI= tu cadena de conexion de la base de datos mongo
    SECRET_JWT=Si$Ge$t10nH0t3l*
    ```

5. Ahora si, una vez instaladas las dependencias y creadas las variables de entorno, ya tienes el proyecto listo para ejecutarlo, para ello puedes ejecutar uno de los siguientes comando en la terminal abierta previamente:

    - Para Desarrollo: ```npm run dev```
    - Para Producción: ```npm run start```   

Cabe aclarar que para que el proyecto funcione, deberás tener previamente instalado Node.js y Nodemon en tu PC. También deberás haber creado una cuenta en MongoDB y obtener tu cadena de conexión.

## Equipo de desarrollo 🧑‍💻🎖️
- Cabello, Luciano
- Cornejo, Martin
- Maza, Sebastián Agustín
- Iosa, Nicolás