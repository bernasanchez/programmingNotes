/*
!NODE JS
Entorno de ejecucion de Js fuera del navegador
Entorno multiplataforma
Lo podemos usar en el backend, haciendo servidores
Esta construido en C++
El V8 convierte a JS en lenguaje de maquina, en lugar de interpretarlo en tiempo real. Compila previamente 
Es muy funcional para desarrollo de aplicaciones 
Global es windows en nodejs

?Porque NodeJs
- Permite interactuar con el servidor
-Organizar el codigo p q sea reutilizable
-Leer y escribir en base de datos 
-Enviar y recibir datos de internete
-Interpretar dformatos estandares
-Manejar codigo asincrono

!EVENT LOOP
Es lo que permite que nodejs convierta a js en un lenguaje concurrente
Es un bucle infinito que espera tareas, las ejecuta y luego vuelve a "descansar" hasta esperar mas tareas (ver img)
Siempre esta escuchando lo que sucede en la callStack(PE) - LIFO.
Si es necesario ejecutar una tarea de la pila de forma asincronica, se envian a otra pila y cuando terminan, envia una respuesta(callback) . Entra a la queue(FIFO) y sale de la cola. 
!Ej. si tenemos:

clg('hola) --> PE
*setTimeOut con 0 segundos...('hola')---> va a la callback queue
clg('finish') --> PE

*Por mas que el setTim, tenga 0 seg se va a ejecutar primero los dos clg y luego el setTim porq es una tarea asincrona

!MODULOS NATIVOS
-Los modulos son una unidad de bloque organizado
-Se exporta desde un punto unico
-Reutilizable

!Tres tipos de modulos.
1) Built-in modules(nativos):
  -File System(writeFile/readFile/removeFile)
  -Global

2) Local modules(escritos por los desarrolladores)
3) External modules(modulos externos):
  -Npm
































*/