/*
*SERVIDORES 

-La pc que coloca sus recursos a disposcion a traves de la red para ser utilizados por algun programa informatico
-Software que funciona en dicha pc

*1)Servidod (HARDWARE): ordenador conectado a una red que sirve como "host de sistemas" (softwares)
*2)Servidor(SOFTWARE): sistema que ofrece un servicio especial que otros prog denominaods "clients" pueden usar localmente o a traves de internet

?COMO FUNCIONA UN SERVIDOR?
*-Modelo Cliente-Servidor, hacer accesible recursos para mas de un cliente de manera independiente a otrp
*-Dichos recursos estaran dispponibles a traves de una red que sera pfrecida pr un servidor(softw) que esta permanentemente emn espera
*-Este funcionamiento garantiza que el cliente siemrpe tenga el servicio en funcion de sus necesidades
 
?HTTTP , REQUEST , RESPONSE
*HTTP: protocolo de transferencia de arhivos en distintos formatos a traves de internet
Los servidores no mantienen un estado, no guarda info sonbre conexiones aneriores

*REQUEST/PETICION/PEDIDO
-Peticion del cliente para acceder a un recurso
-Contiene info relacionada al recurso que se desea acceder 

*RESPONSE/RESPUESTA
-Rta del servidor basada en la peticion realizada
-Devuelve el recurso al cliente

!SERVIDOR WEB
*-Constituido por archivos estaticos(html, css, docs,img)
-El response contiene en sus cabeceras el tipo de recurso devuelto(headears con metadata)
*-La comunicacion entre servidor y cliente se basa en el protocolo HTTP/HTTPS

!FUNCIONAMIENTO DE UN SERRV WEB
*1 el cliente utiliza un navegador 
*2 el cliente realiza una peticion(req) al serv(click en un boton x ej)
*3 el serv recibe la peticion, elabora la respuesta(response) y la envia al cliente
4 el cliente recibe la rta (response) y utiliza los datos para hacer algo determinado 

 */
//Crear servidor desde 0 

//1 npm init 
//2 install nodemon

const http = require("http") //objeto que trae la info para crear y levantar el servidor 

//Config un puerto(lugar donde se escucha el servidor) y un host(dir ip)
const port = 3000;
const hostname = 'localhost' //podemos disfrazar nuestro ip con esa palabra

//definir un requestListener: F que contiene la logica que nuestro server necesita a partir de un request. Recibe la respuesta, la procesa y devuelve una response
const requestListener = (request, response) => {
  //generar un response
  response.statusCode = 200 //la respuesta fue correcta(200)
  response.setHeader('Content-Type', 'text/plain')
  //response.setHeader('Content-Type', 'text/html') Ej. si mandamos un html y no un texto plano 

  response.end('Hello World!Entraste al server!!')
  //response.end(<h1>'Hello World!Entraste al server!!</h1>') //Aca mandamos un titulo por ej dentro del html
}

//crear el servidor 
const server = http.createServer(removeListener);



//levantar el server
server.listen(port, hostname, () => {
  console.log(`Server on http://${hostname}:${port}`)
})

