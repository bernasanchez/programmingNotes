/*
*POSTGRESS-NODE

Libreria que nos permite interactuar con BD PostgSQL en node
-NODE-POST es UN CLIENTE y POSTGSQL es el servcio
-Nos permite interactuar con sql dsd js de forma amigable 

*Install 
1)npm install pg 
2)nos conectamos a la BD siguiendo la documentacion
  A)const pg = require('pg)
  B)Creamos el cliente: 
    const client = new pg.Client({
      connectionString: 'postgress://postgress:postgress@localhost/pd_demo'
    })
  C)Conectar el cliente con postgres:
    client.connect((error) => {
      if(error) clg.error('error connecting with database: ', error.stack)
      else clg('connected') 
    })
  D)Exportamos el modulo:
  module.exports = client

3)Crear la base de datos 
    A)En consola colocar:  pgcli
    B)create database pg_demo
    C)Insertar tablas y datos en la BD

4)Implementamos la base de datos con las rutas correctas
    const dbClient = require("../db") //Importamos la base de datos

!RESULT: 
!result.rows siempre nos trae un arreglo de respuestas



 */