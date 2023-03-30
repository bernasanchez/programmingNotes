/*
*MAP - FILTER - REDUCE EN JAVASCRIPT

!PARADIGMA
*Forma de pensar o abordar cierto tema.Un Parad de programacion es una forma de programar siguiendo algunas ideas fundamentales

? QUE ES EL PARADIGMA FUNCIONAL?

*En la ProgFunc nuestros prog empiezan con datos iniciales y les vamos aplicando F para obtener nuevos valores pero sin modificarlos directamente, es decir, sin realizar "mutaciones". 
?Entonces, como obtenemos un nuevo valor en este paradigma? 
*Creamos uno nuevo a partir del original. Ej: 
const num = 3;
const doble = num * 2


!PARADIGMA IMPERATIVO(Ciclo For)
*Lo importante aqui es "el cómo". Cómo debe funcionar el programa

!PARADIGMA FUNCIONAL
*Nos importa mucho mas "el qué". Qué resultado esperamos.
*Promueve el uso de FUNCIONES PURAS: F que al ser invocadas con los mismos argumentos, siempre producen el mismo valor y ademas, no producen efectos secundarios
Despues de ser ejecutadas, no producen cambios en el estado del programa
*FUNCIONES PURAS = PROGRAMAS PREDECIBLES 
*En el PF, el peso de las funciones es muy importante
*Las F son ciudadanas de 1er orden y son "un valor mas"

?Que son las FUNCIONES DE ORDEN SUPERIOR?
*Funciones que reciben por parametro otras F o F que como resultado de su ejec retornan otra funcion 
Ejemplos:
-MAP
-FILTER 
-REDUCE
Estas F, estan presentes en todos los arrays (incluso vacio)

!1) MAP 
*Usamos MAP cuando tenemos un array y queremos obtener un nuevo array de otra cosa
Lo podemos pensar como "una maquina que transforma" los elementos de un array aplicandoles a cada uno, una F en base al elem en cuestion y su posicion en el array 
Esa F es la que tenemos q prog nosotros, en base a como queremos transformarlo
Ej
1)Tenemos un array
2)En otra var obtenemos el nuevo array invocando a map sobre el array de numeros
3)El 1° param es la "F transformadora": se va invocando x cada elem del array. Esta F recibe como 1° param el elem que va a transformar y 2° la posicion de ese elem dentro del array. Podemos opcionalmente poner como 3° param el array en cuestion(numeros). 
4)Podemos escribir solo los param q necesitamos
!Lo que hagamos dentro de map debe ser sincrono

const numeros = [3,10,20,50]
const dobles = numeros.map(funcion(numero){
    return numero * 2
})
Resultado:
1) numeros: sigue siendo el mismo array
2) dobles: se obtuvo el 2ble de cada num [6,20,40,100] 

!Errores comunes en Map: 
*MAP, FILTER Y REDUCE DEBEN SER FUNCIONES PURAS
*LAS F PURAS retonan siempre el mismo resultado ante los mismos parametros y no producen efectos secundarios 
(ver ejemplos en el video)


!2) FILTER 
*Es como una maquina que va tomando cada elem del array y va decidiendo si cada uno de ellos pasa al nuevo array.Si el elem en cuestión, no cumple cierta condicion, es descartado
*El resultado de filter: es un nuevo array que contiene solo los elementos del array original que cumplen con cierta condicion 
*Esta F que tenemos que programar se llama PREDICADO: una F que afirma o niega si un elem cumple cierta condicion
Ej.
const productos = [
    {id: 'asdaa', nombre: 'Camiseta', precio: 500},
    {id: 'ashja', nombre: 'Zapatillas', precio: 2000},
    {id: 'assfa', nombre: 'Pantalon', precio: 1500}
]
?Como podria filtrar los productos baratos?
*const productosBaratos = productos.filter(producto => producto.precio < 1000 )

*Otra opcion mas clara: 
const esBarato = producto => producto.precio < 1000 
const productosBaratos = productos.filter(esBarato)
const esCaro = producto => !esBarato(producto)

*Tambien podemos utilizarlo para sacar numeros repetidos de un array: 
const numeros = [1,2,3,4,3,1]
const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
    return posicion === numeros.indexOf(numero);
})


!3) REDUCE (Reducir array a un unico valor)
*Pensarlo como una "prensa de cafe": necesita un array y un valor inicial que le indicamos nosotros. Con cada vuelta de la palanca, opera con el valor que va acumulando con cada elemento del array. Tras operar con todos los elem, obtenemos un UNICO VALOR COMO RESULTADO
Ej.
*1° Param: F reductora: recibe como param el acumulador (que valor tiene el accum antes de "girar la palanca" )
*2° Valor inicial: en este caso el 0
*3° Elem Actual: numero
*Dentro de la F reductora tenemos que retornar el valor del accumulador actualizado 

*const numeros = [3,10,20,50]
*let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0); 

!Importante: el valor inicial lo podemos omitir y va a tomar el valor en pos 0 del array y desde alli comenzara a acumular






































*/