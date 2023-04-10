/*
!EXPRESS
*Libreria de Node que facilita el desarrollo del lado del servidor
-Trata a los request/response como OBJETOS
-Matchea con el metodo y el path
-Permite modularizar el proceso de solicitud y respuestas mediante el ruteo

!HTTP
Protocolo HTTP es el estandar de comunicacion en la web
CLIENTE-SERVIDOR 
Un cliente requiere un recurso y el servidor responde con un determiando recurso. Si no lo tiene, retorna un error
El cliente renderiza la pag o la info con lo que retorna el servidor 

!METODOS HTTP
*GET: OBTENER
*POST: CREAR
*PUT: ACTUALIZAR
*DELETE: BORRAR

!CODIGOS DE ESTADO HTTP
200 OK
201 CREATED
304 CACHED
400 BAD REQUEST
401 UNAUTHORIZED
403 FORBIDDEN
404 NOT FOUND
500 SERVER ERROR

!MIDDLEWARES
*Son funciones que se ejecutan antes/durante el flujo de una ruta de Express
*El CLIENTE hace un pedido(req) -- MIDDLEWARE --- SERVIDOR --> response (llega al cliente)


*/
//!INSTALAR PROYECTO DE EXPRESS

//mkdir test
//cd test
//npm init -y (crear un pack json desde 0)
//npm i express

//En file app.js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

//Ir al json 
//configurar scrips y dentro agregar: 
//"start": node app.js
//Luego realizar npm start en el puerto elegido