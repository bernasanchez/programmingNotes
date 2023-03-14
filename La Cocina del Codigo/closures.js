/*
CLOSURES O CLAUSURAS JS

Para entender el concepto necesitamos 3 elementos : 
1) una F dentro de otra F: una F padre y una F hija (funcion anidada) 
2) una var dentro del scope de la F mas grande y que la F de adentro la utilice de alguna manera 
3) Invocar a la funcion interna no desde el scope de la F mas grande, sino desde otro scope (aspecto mas destacado)
En js podmeos asignar una F a una var, es decir, tratar a las F como cualquier otro valor . Como lo podemos hacer? Ver parte 2 de la F
- Las funciones anidadas que recuerdan el conjunto de variables a las que podian acceder, por mas que se las invoque desde otro lugar, desde otro scope

//*Parte 1 
function crearContador(){
    let contador = 0;
    function incrementar(){
        contador = contador +1
        return contador 
    }
}
//*Parte 2
Podemos guardar la F que llame a la F interna en una variable: ahora la F interna se convirtió en una closure ya que al contener una referencia a una variable que esta declarada en un scope superior, es como si la funcion "encerrara" a la var y se generara un vinculo entre ellas.  No solo estamos retornando la F , sino todo el vínculo F + var (continua en punto 2)

function crearContador(){

    let contador = 0; //*Vinculo entre la var y la F incrementar
    return function incrementar(){ //*Agregamos un return y "sacamos la F"
        contador = contador +1
        return contador 
    }
}

const contador1 = crearContador() //*Guardamos la F que retorna otra F 

Si bien desde el scope global, no pdemos acceder a la var contador ya que esta dentro del scope local (F crearCont), como "sacamos" a la F interna y la guardamos en contador1, cuando la invoquemos contador1(), ésta va a seguir vinculada a la var local(let contador) y va a poder accederla normalmente

2) VINCULO ENTRE LA CLAUSURA Y LA REFERENCIA

La clausura tiene que ver con el scope y con el contexto de ejecucion (teoria de conjuntos)
No solo estamos retornando la F , sino todo el vínculo F + var. Ahora si invocamos la F a traves de la var contador1() veriamos que el contador se va incrementando sucesivamente ej. (1, 2 ,3,etc). Es decir, nuestro contador se va incrementando de a 1 

Cuando se ejecuta la F, esta accede al valor que tiene la var en ese momento 
Si agregamos otra F por ej el setTimeout: creamos un nuevo closure ya que la F que tiene el timer tambien tiene una referencia a una var declarada afuera   y se esta invocando desde otro lugar.  
function crearContador(){

    let contador = 0; 
    
    setTimeout(function (){ //*creamos un nuevo closure 
        contador = 100
    }, 5000)

    return function incrementar(){ 
        contador = contador +1
        return contador 
    }
}
const contador1 = crearContador()

contador1() //1
contador1() //2
contador1() //2
... despues de 5 segundos 
contador1() // su valor se actualizo y ahora vale 101...

QUE SUCEDE SI HACEMOS ESTO(EN LA FUNCION ORIGINAL)?

const contador2 = crearContador()

Las clausuras tienen que ver con el scope y el CONTEXTO DE EJECUCION que se van creando cada vez que se ejecuta una . 
Esto se relaciona con la pila de ejecucion: 
Cuando js ejecuta nuestro prog crea el contexto de ejecucion inicial : 
1) Crea la funcion global que integra a todo el programa y todo contexto de ejecucion pasa por dos fases:

A)FASE DE CREACION: donde se carga en memoria todo lo necesario para ejecutar esa funcion. Ej. archivo al q pertenece la F, puntero de la prox linea a ejecutar(:1), se crea el obj global(window), se pone el valor que tiene this dentro de la F(wddow), se asocia el contexto de ej con el codigo q se va a ejecutar(todo nuestro script), se crea un ENTORNO LEXICO: es un objeto q tienen los Context de Ejec donde se almacenan los nombres de las var que existen dentro de una F y los valores actuales que tienen (modo clave valor. ej nombre = 'sacha'). Si le asignamos un nuevo valor, cambian el entonrno lexico
Dento de este entorno, las claves son unicas, no podems tener dos var con el mismo nombre dentro de la misma F (REGISTRO DE ENTORNO/ENVIROMENT RECORD). Ademas, cada entorno lex tiene un "puntero ext:" a su entorno lex exterior (el entorno en el q éste fue creado (el entorno))
En nuestro caso (funcion de arriba): se crea un ELex(scope) y js ya sabe que cuenta 3 identificadores de variables: 
1)Nombre de la F:  crearContador = fn. Como es una F declarada se carga compleamente en memor cuando se esta creando este CE y cada vez q js crea una nueva F, la vincula al entorno que la creo, asi esta funcion queda vinculada al EGlob
2)variable: contador1
3)variable: contador2
Como ambas (2, 3) estan declaradas con const, su valor incial es "no inicializada"
Por ultimo el puntero al entorno lexico exterior, en el caso de la func global, este puntero estará vacio ya que es el primer entorno que se esta creando
Ahora con todo lo necesario para ejecutar la funcion, se apila en PILA DE EJECUCION y comienza la FASE DE EJECUCION

B)FASE DE EJECUCION: 
Js va ejecutando sentencia x sentencia, la fase de creacion permitio crear el entorno lexico con sus func y variables pero no tiene que ejecutarlas y pasa directamente de arriba de la F a la linea:
const contador1 = crearContador(); donde se encuentra con una asignacion. En este punto, crea un nuevo contexto de ejecucion para esta funcion, donde carga la info necesaria vista anteriormente(fase creacion): aqui el LE quedaria con: 
1)contador1 (no inicializada)
La funcion que retorna (incrementar) no la guarda en este entorno ya que no existe una funcion declarada con ese nombre, simplemente estamos retornando una F con ese nombre pero no la estamos declarando y por ultimo js conecta este EL con el EL exterior(el entorno donde se creo la F).
Terminada la fase de creacion de este nuevo contexto de ejec, se apila en la PILA de Ejec y se comienza a ejecutar 
(PILA DE EJEC: 2)crearContador, 1)Global )

Se le asigna a la var contador el valor 0. Esta actualizacion de la var se hace sobre el entorno lexico y luego se pasa al return de la F y ahora volvimos a las clausuras

AL estar retornando una F como si fuera cualquier otro valor, js crea una nueva instancia de esta F en memoria (fn incrementar {...}), como si creara un nuevo objeto , pero al ser una F VA A CONECTARLA AL ENTORNO EN EL Q ESTA SIENDO CREADA (crearContador()). ÉSTA ES LA CLAUSURA, UNA F QUE PASAMOS COMO UNA VAR MAS PERO QUE SIGUE CONECTADA AL ENTORNO LEX EN EL Q FUE CREADA

AHORA, como estamos retornando de la F, crearContador se termina de ejecutar, su CEjec sale de la pila para ejec la asignacion pendiente en contador1. A esta var le estamos asignando la clausura . Esta asignacion se produce en el Ent Lex de la F global donde se encuentra la var contador1.
Por mas que su CEjec haya salido de la pila, la F que retornamos igual va a seguir vinculada al EL en el que fue creada y va a poder seguir accediendolo tranquilamente.
Luego, se ejecuta la clausura por 1era vez (contador1()). Al ser una nueva invocacion de F (en este caso la F incrementar()), se crea un nuevo CE para la misma cargandose todos los datos iniciales q ya sabemos y un nuevo EL para este CE. No hay variables en este entorno, por lo que el EL va a estar vacío. El EL exterior ya venía vinculado porq era una clausura, asiq este registro ya esta listo para entrar en la PE y comenzar con su fase de ejecucion:
Se incrementa la var contador y como ésta no existe en el EL, js la busca siguiendo la cadena de scopes, encontrandola en su EL inmediatamente exterior. Entonces actializa su valor sobre este entorno lexico-global- (de 0 a 1 ) y se retorna una copia de este numero. Como se trata de una sentencia de retorno, el CE sale de la pila de ejec y se continua ejec la sig instruccion (el 2do contador1()). 
El resultado de ejecutar esta linea es similar al de la linea anterior, salvo que ahora la var contador va a terminar con el valor 2 y lo mismo con la sig linea (3er contador1()).

¿ QUE PASA CUANDO SE VUELVE A INVOCAR A LA F crearContador()?

const contador2 = crearContador()
contador2()

Para ejec js crea un nuevo CE y es uno nuevo, no reutiliza el CE que habia creado para la primera ejecucion:
!CADA VEZ QUE SE EJECUTA UNA FUNCION EN JS, SE CREA UN NUEVO CONTEXTO DE EJECUCION CON UN NUEVO ENTORNO LEXICO
Comienza nuevamente la fase de creac con la informacion vista y crea el EL para almacenar las var de esta F:
1)contador (no inicializada)
(PILA EJEC: 2)Contador(no inic), 1)Global))
Mientras tanto, el otro contador (del CGlobal permanece intacto porq es otro entorno. Su valor es 3).

?Como relacionamos este entorno con el EL exterior?
Como esta F(crearCon) fue creada en el EGlobal, su EL exterior va a apuntar al EL global. Luego se coloca en la PE y se pasa a la fase de ejecucion
Se le asigna el valor 0 al contador en este contexto y se retorna una clausura (F incrementar), para modificar el contador de este entorno y esta clausura se almacena en la var contador2.
Se continua ejec la sig F (contador2()). Al ejec esta F, estamos modoficando el 2do contador, el q acabamos de crear (cont con valor 1). El otro contador no se entera de este cambio.

!COMO CADA CONTADOR FUE CREADO EN CONTEXTOS DISTINTOS, SOLO PUEDEN SER MODIFICADOS POR LAS FUNCIONES QUE PUEDEN ACCEDER A CADA UNO DE ESOS ENTORNOS 

!1) PROTEGER EL ACCESO A LAS VARIABLES 
Es el primer uso que tienen las clausuras. 
En el ej anterior, la unica manera de acceder a la var contador es incrementandolo, cuando lo hagas, te voy a devolver el valor incrementado (return), pero no vas a poder acceder al valor directo del contador: contador1.contador. 
!No podemos acceder directamente a esa variable
!Que podemos hacer con las variables dependera de lo que queremos hacer con nuestro programa.

Podriamos agregar una nueva funcionalidad para decrementar el contador y para acceder al valor que tiene tambien: 
Devolvemos un objeto con la propiedad incrementar, decrementar y obtenerValor, para obtener el valor actual del contador. 
Ej. 

function crearContador(){

    let contador = 0; 

    return {
        incrementar: function(){ 
            contador = contador +1
            return contador; 
        },
        decrementar: function(){ 
            contador = contador -1
            return contador; 
        },
        obtenerValor: function(){ 
            return contador; 
        },

    }
     
}
const contador1 = crearContador()
contador1.incrementar() //1 //*Ahora es un objeto (no una F)
contador1.incrementar() //2
contador1.decrementar()//1
contador.obtenerValor() // 1

!Cada una de las nuevas propiedades es una clausura, ya que si bien son metodos de un objeto , son F que estan escritas dentro de una funcion mas grande (funciones anidadas). 
!TODAS ACCEDEN A UNA VAR QUE ESTA EN UN SCOPE SUPERIOR Y TODAS SE VAN A INVOCAR DESDE OTRO SCOPE (No desde el q pertenecen).

Ahora contador1 no es una F, es un objeto por lo tanto lo tenemos que ejec contador1.incrementar()

API DE UN OBJETO: 
Nos permiten interactuar con los obj. Que metodos podmeos invocar sobre ese objeto y que prop internas nos permite acceder
Pero siempre protegiendo a las variables internas
Es decir por ej. podemos acceder al valor del contador con el metodo obtenerValor pero no podemos modificar su valor con contador1.contador = 500. La API diseñada para nuestro contador no nos lo permite


!2) FABRICA DE FUNCIONES 

La F crearContador nos sirve para fabricar un nuevo contador: const contador1 = crearContador(), cada vez q la invocamos.
Y cada vez q lo hacemos, utilizamos ese "molde" pero podemos personalizarlo.  
Por ej. inicializar un contador1 = crearContador(10). Las clausuras son excelentes para esto
!En lugar de usar una var local para inciar nuestro contador, usamos un parametro 
function crearContador(contador = 0){
    return {
        incrementar: function(){ 
            contador = contador +1
            return contador; 
        },
        decrementar: function(){ 
            contador = contador -1
            return contador; 
        },
        obtenerValor: function(){ 
            return contador; 
        },

    }
     
}
const contador1 = crearContador(10)
!Los param que reciben la F actuan como var locales dentro de la F y se guardan dentro del EL. Las clausuras pueden seguir accediendo a ese valor igual que antes
!VER EJEMPLO DE IMPRESORA DE MENSAJES PARA ENTENDER LA FABRICA DE FUNCIOONES







*/

