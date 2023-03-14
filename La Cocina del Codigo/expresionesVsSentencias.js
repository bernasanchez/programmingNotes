/*
EXPRESIONES VS SENTENCIAS

SINTAXIS DE LENGUAJE DE PROGRAMACION
Las reglas de definen como podemos combinar distintos simbolos para producir instrucciones validas y asi crear un programa que la pc entienda 

Existen dos estructuras sintacticas para crear programas:

1 EXPRESIONES
Ej 10 + 10. 
!Unidades de codigo que producen un valor al ser evaluadas. Ademas, algunas pueden tener efectos secundarios
Podemos pensarlas como PALABRAS en español

A)Expresiones Primarias
Cualquier palabra pequeña en js que pos si sola produzca un valor
Ej. valores primitivos
Son las mas basicas de todas porque al ser evaluadas, producen el mismo valor que tienen.
Tambien podemos usar palabras reservadas como this o nombre de una variable 

Expresiones mas complejas:
-Objetos (clave y valor (los valores son expresiones))
-Arrays: const arr = [10, 20, 30] (estan constituidos x expresiones)
- Funciones
Esta lista es evaluada como referencias: posiciones de memoria donde se encuentran almacenados esos objetos. Pero son transparentes para nosotros, no las podemos ver

-Expresion de Funcion:
Cuando escribimos una F en un lugar del codigo donde se espera un valor . En js es muy comun usar las F como valores 
!Usos: 
1)//*Asignarla como valor a variable
const fun = function saludar(){ 
    clg('Hola)
}
2) //*Pasarla como param cuando invocamos otra F
numeros.filter(function filtrarPares(num){ /
    return numero % 2 === 0;
})
3)//*Como prop de un objeto
unaVariable = miObj['nombre']
otraVar = miArray[0]
4) //*Como invocacion de una F (tambien es una expresion)
!En js cuando invocamos una F, siempre obtendremos algun valor de retorno
Invocar a una F es de los ej mas claros para producir valores
5) //*Operadores
Nos permiten generar nuevos valores a partir de una o mas expresiones. Ej let resul = 10 + 20
Cuando le asignamos un valor a una var, tambien estamos usando un operador, el operador de asignacion 

!Nuevas expresiones: 
- Expresion de funcion asincrona: async function
- Invocacion de fun asinc: await
- Generadores: function*


2 SENTENCIAS/STATEMENT 
!Acciones que son ejecutadas para que nuestro programa siga la logica que queremos. Es una accion que js ejecuta para que ocurra algo, para que avance la logica de nuestro programa(instrucciones)
Podemos pensarlas como las ORACIONES en español
En js cada sentencia la terminamos con ; . Este marca el final de una sentencia/instruccion

TIPOS DE SENTENCIAS
1)//*Sentencia de Expresion: 
Sirve para evaluar una expresion. Cuando evaluamos una expresion, buscamos que se produzca el efecto secundario que tiene.
Ej. asignarle un valor a una var con el operador de asignacion( let edad; edad = 29)

2)//*Sentencia Vacia
Ej. const arr = [] 
for(let i = 0; i <= 99; arr[i++] = i ){
(podriamos sacar las llaves tamb)
}
Usado de esta manera,el operador de incremento nos devuelve el valor que tenia la var i y depsues la incrementa. Es decir, en la pos 0 guarda el 1, en la 1 el 2 y asi sucesivamente

3)//*Sentencia de Bloque
Es buena practica utilizar un bloque de codigo, por mas que sea para agrupar una unica instruccion
Ej.  if(error){
    logError(error);
    mostrarError(error);
}

4)//*Sentencia de Declaracion
Declarar cada variable en una nueva linea de codigo. Es mas facil de esta manera, encontrar la declaracion de cada variable
Ej. let nombre = 'berna'
let apellido = 'sanchez'
let edad = 31

5)//*Declaracion de Funcion/Sentencia de Funcion/Function Statement
Sirve para crear una F con nombre y los parametros indicados dentro del scope donde se encuentra esa sentencia 
saludar()
Ej. function saludar(nombre){
    clg('Hola' + nombre)
}
Una de las diferencias mas grandes con las expresiones de F es el HOISTING: Si declaramos una F , podemos invocarla antes que su declaracion(como arriba). Esto es gracias al hoisting, js 'sube' la F antes de la invocacion . 
En cambio con una Func Expression no podriamos hacer eso, ya que las expresiones de F "NO SE ELEVAN" porque las estamos usando como VALORES: const saludar = function(){
    clg('hola')
}; 
Es como si quisieramos usar un obj antes de crearlo 
!El HOISTING es la principal diferencia entre las F declaradas y las que usamos como expresion
!Nombre: F Express(opcional) / Declaracion(requerido)
!Punto y coma: F Exprss(necesario) / Declaracion(no requerido)

¿CUAL DEBERIAMOS USAR? F EXPRESS O FUNC STATEM
En general es mas util utilizar las F como expresiones, especialmente cuando queremos pasar una F como parametro
Ej const esPar = function(num){
    return num % 2 === 0;
};
const pares = numeros.filter(esPar)
Esto refuerza la idea de la F como un valor mas 

6)//*Sentencia de Control
Podemos alterar el flujo normal de ejecucion. Podemos decidir qué flujo va a seguir la ejec de nuestro programa
Tipos: 
- if else
- switch
- for
- for in
- for of 
- while
- do while 

7)//*Sentencia de Salto
Usamos las sent de salto para que la ejecucion de nuestor programa salte o retorne a otra parte
Tipos:
- break
- continue
- return
- throw

8)//*Sentencia Miscelaneas
- debbuger: la ejec se detiene y nos pasa la info del programa. Sirve para buscar buggs
- use strict: sirve para ejecut nuestro prog en modo estricto


















*/