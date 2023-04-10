/*

*PROMISIFYING

*ASINCRONISMO EN JS
En JS podemos realizar tareas que no sabemos cuándo
se completarán y a la vez seguir haciendo cosas mientras
esperamos a que estas se completen. Todo esto gracias a la
concurrencia del lenguaje.
Ejemplos prácticos de tareas asincrónicas
● Consulta a una DB
● Leer un archivo de nuestra PC
● Pedido a una API
● setTimeout / setInterval
● addEventListener

Concurrencia

La concurrencia es la herramienta que utiliza JS para poder
implementar el asincronismo.
El concepto se basa en poder realizar varias tareas a la vez,
pero no necesariamente de forma paralela.
Se trata de hacer “un poquito de cada tarea” en el tiempo
pero no todas las tareas al mismo tiempo.

Hilo de ejecución
JS es un lenguaje que posee sólo un hilo de ejecución y por
ende sólo posee una pila de ejecución (call stack).
Debido a esto JS puede hacer sólo una tarea por vez en su
hilo de ejecución principal.
Se suele decir que JS es un lenguaje single-threaded.

Pila de ejecución
THE CALLSTACK
One thread == One call stack == One thing at a time


Blocking, non-blocking

Una tarea bloqueante es aquella en donde nuestro
programa debe esperar a que termine la ejecución
completa de esa tarea, para poder seguir a la siguiente
tarea.

Una tarea no bloqueante es aquella en donde nuestro
programa puede diferir esta tarea a otra área y puede
seguir con la siguiente instrucción, este es el caso de JS.

Callbacks
Se llaman callbacks a las funciones que son pasadas como
argumento a otras funciones y las cuales luego son
invocadas dentro de esta última para realizar cierta tarea o
acción.

Los callbacks pueden ser sincrónicos o asincrónicos.









*/