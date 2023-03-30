/*
    !TIPOS DE DATOS EN JS

    *1)PRIMITIVOS
    -STRINGS
    -NUMBERS
    -BOOLEAN
    -NULL: AUSENCIA DE VALOR, NO CONTIENNE NADA
    -UNDEFINED: VARIABLE TIENE TIPO DE DATO DESCONOCIDO(NO TIENE NADA)
    -SYMBOL: DATOS UNICOS
    

    var fruta = 'banana' (contenedor donde le guardamos el valor banana)
    fruta = 'manzana' : le estamos cambiando el valor que almacena la var (se pierde el valor ant)

    En cambio, si hacemos esto:
    var fruta  = 'banana'
    var fruta2 = fruta
    Se crea una copia del valor que tenia la var fruta y lo guarda en var fruta 2. ES UNA COPIA DEL VALOR, PERO NO HAY NINGUNA RELACION ENTRE ELLAS. 
    Si le cambiamos el valor a una, la otra no cambia 
    Las var en js son independientes


    *CON OBJETOS PASA ALGO DISTINTO:
    Los objetos son obj literales, funciones, arrays, cualquier cosa que no sea un valor primitivo
    El espacio que ocupa un obj en memoria puede ir variando(HEP: memoria dinamica destinada a almacenar objetos). 

    Cuando asignamos una var a un obj, js va a poner a ese objeto en un espacio libre de memoria que encuentre en el HEP, con una REFERENCIA

    var fruta = {
        nombre: 'banana',
        cantidad: 4
    }
    Luego, recuerda en que posicion de memoria lo puso y lo guarda dentro de variable:
    ej. var fruta = A5FF4 (esto contiene el obj fruta)

    ESTO SE CONOCE COMO REFERENCIA: la posicion de memoria que se usa para acceder a un objeto

    ¿Que pasa si una var tiene un obj y le asignamos otra?
    var fruta2 = fruta

    SE COPIA LA REFERENCIA AL OBJETO: A5FF4 (esto contiene el obj fruta)
    y como antes, las variables son independientes
    Si decidimos asignarle otro objeto a la variable, se descarta la referencia que tenia y se asigna la que le corresponde

    Si hay multiples variables que apuntan al mismo obj y modificamos una prop de ese obj 
    ej. fruta.cantidad = fruta.cantidad -1 

    Ese cambio se realiza en el objeto al que ambas hacen referencia y como ambas apuntan al mismo objeto si accedemos a las propiedades de :
    fruta2.cantidad: el valor es 3 tambien (se modifico tambien)

    *2 FUNCIONES Y VARIABLES

    funcion comer(cantidad){
        cantidad = cantidad - 1;    (FUNCION COMER)

    }
    var cantidad = 4; (FUNCION GLOBAL)
    comer(cantidad);

    Si pasamos una variable como paramentro: 
    Si la variable tiene un valor primitivo, el param va a recibir una copia de ese valor.
    Si en cambio es un obj, se copia la refencia a ese objeto.
    
    Si existe un cambio dentro de la var de la funcion, la variable que esta afuera no se va a modificar, son independientes. Cuando se termine la ejec de esa funcion, las variables se descartan

    *EN OBJETOS:
    Si le pasamos un obj como parametro, se copia la referencia que apunta al objeto(eJ A5FF4).
    Ahora ambas var tienen la misma referencia ocupando el mismo espacio de memoria. Si dentro de la F se modifica alguna prop del objeto, esta moodificacion se va a realizar sobre el objeto mismo.
    Cuando se termine de ejecutar la F, continuamos con la misma referencia y el objeto va a estar modificado
    funcion comer(fruta){
        fruta.cantidad = fruta.cantidad - 1;    (FUNCION COMER)

    }
     var fruta = {
        nombre: 'banana',
        cantidad: 4
    }
    comer(fruta)

    










*/