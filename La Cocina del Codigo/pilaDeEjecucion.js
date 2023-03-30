/*
!PILA DE EJECUCION (CALL STACK)

*La Pila de Ejecución es una pieza FUNDAMENTAL de los motores de JavaScript que usan para poder ejecutar nuestros programas.
*Básicamente ES COMO UN MAPA que les sirve para saber en qué función están parados durante la ejecución de un programa y por qué funciones fueron pasando hasta llegar ahí.
*De esta manera, cuando termine de ejecutar la función con la que están trabajando saben cuál es la función con la que deben continuar después.
*Pero no usan un mapa como los que estamos acostumbrados a usar nosotros, USAN UNA PILA.

*PILA = LIFO (Last in First out): significa que cuando queremos sacar un elemento de la pila, tenemos que sacar el primero de todos

?¿COMO FUNCIONA?
*JS lee el codigo y cuando se encuentra con el LLAMADO a una FUNCION, crea un registro(frame) con info relacionada a la funcion y la guarda en la pila: 
*-ej let resultado = doble(7)

*Ante una NUEVA llamada a la funcion, JS crea un NUEVO registro frame y la ingresa a la pila. Esta funcion es la ultima que queda en el call stack, por eso coincide con la ejecucion del programa (ej. si hay fn multiplicar y sumar, la que esta arriba es la que ejecuta)

!FUNDAMENTAL: el motor puede ejecutar una sola cosa a la vez. La funcion asociada al registro que esta arriba de todo en la pila. Cuando termina de ejecutarla , la saca de la pila y continua con la otra funcion que sigue en la pila


*Cuando ejecutamos una funcion aparece en el call stack: el nombre de la F y la proxima linea a ejecutar (1° hacer ensalada mixta)
?Que es lo que se llama anonimus que aparece debajo de la F?
*Cuando ejecutamos una F , se agrega una F anonima que engobla a todo el prog. Cuando esta F salga de la pila, significa que se termino la ejecucion del prog principal
*Cada vez que llamamos a una F, esta se apila en el CS (2°Cortar tomate). Cuando termino de ejecutar "cortar", sale de la Pila y continua ejec la sig función (3°Cortar lechuga)
*4° Cortar cebolla 

!STACKTRACE: secuencia de llamadas que se fueron realizando hasta que sucede una excepcion o error inesperado. Lo podemos ver en la consola

!CONTEXTO DE EJECUCION(SCOPE): contexto actual de ejecucion. Existe el Local y el Global. Este contexto de ejecucion esta determinado por el conjunto de variables y funciones que se pueden acceder cuando se esta ejecutando una funcion:
!1-El conjunto de variables que tiene acceso a la F
!2-el contexto(this), 
!3-arguments u obj global(windows o global)

*THIS: objeto "dueño" de la funcion y el valor que tiene this determina el contexto de la funcion

*ARGUMENTS: obj similar a un array que tienen las F en su scope local(menos las F flecha). Contiene todos los parametros de la F cuando fue invocada

!Cada vez que llamamos a una F se crea un nuevo scope(CE) y se lo guarda en el registro asociado al llamado a esa funcion, en la pila de ejecucion.
Cuando llamamos a una funcion que se invoca a si misma(5°Mezclar ingredientes), sucede lo siguiente (TEMA RECURSION): 
Al tener un 5 pasado x parámetro, la F se ejecuta sucesivamente hasta llegar a 0, y cada vez que se ejecuta, se repite la funcion en el CE pero cada una con su propio contexto de ejecucion(Ej. mezclarIngredientes en uno vale 4 , mientras que en la F de abajo vale 5). Es decir, cada vez q se invoca una F, se crea un nuevo CE y se lo agrega a la pila y son dos elementos distintos x mas q tengan el mismo nombre
(las funciones dejan la pila cuando se terminan de ejecutar)
*Una vez terminada la 5°F , pasa a la siguiente (6°comer): se agrega un nuevo registro en la pila , se ejecuta su contenido y cuando finaliza se saca de la pila.
*Lo mismo sucede con hacerEnsaladaMixta y luego se continua con la F global y tambien se la saca de la pila y finaliza la ejecucion del programa 

*/
//Ensalada mixta

const cortar = (ingrediente) => {
    console.log('Cortar ' + ingrediente);
}
  
function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
}
  
function comer() {
    console.log('Comer');
}
  
function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
}
  
hacerEnsaladaMixta();