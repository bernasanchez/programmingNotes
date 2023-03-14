/*
SCOPE EN JS (ENTORNO)

Cuando hacemos referencia a una var , js comienza buscando en el entorno mas cercano, ej dentro de bloque if y seguira buscando en entronos mas lejanos hasta que encuentre la variable declarada
Cada uno de estos entornos recibe el nombre de scope en js

SCOPE: es lo que le da significado a las variables y determina el conjunto de variables que podemos acceder desde una linea de codigo

El scope de cara var depende de donde y como la declaremos 
Como? Si usamos var, let o const
Donde? De manera libre fuera de toda F o bloque de codigo, o dentro de una funcion, un if , etc, pero solo con let o const

Js tiene un SCOPE LEXICO(LEXICAL SCOPING): 
El scope de cara var se determina leyendo el codigo del programa sin ejecutarlo, se lo conoce tambien como scope statico

SCOPE VS CONTEXTO 

Scope: contexo actual de ejecucion. El contexto en el que los valores y expresiones son visibles o pueden ser referenciados 
Ej dos funciones distintas con var iguales var fruta = 'banana' o var fruta = 'manzana'. Por mas que las var sean iguales, estan en contextos distintos 

CONTEXTO VS CONTEXTO DE EJECUCION (SON COSAS DISTINTAS)

1) CONTEXTO: el valor que tiene la var this en algun momento de la ejecucion. Cual es el objeto que está ejecutando una funcion 

2) CONTEXTO DE EJECUCION/SCOPE/ENTORNO : existen dstintos tipos

var fruta = 'manzana';
function comer(){
    var otraFruta = 'banana';
    clg('comiendo' + otraFruta)
}


A) SCOPE GLOBAL: las var globales pueden ser accedidas desde cualquier lugar de nuestro programa
Las var globales son aquellas que declaramos fuera de toda funcion o bloque de codigo, sin importar si las declaramos con var, let o const
Las var globales, permanecen en memoria durante toda la ejecuciond del programa 


B) SCOPE LOCAL: las var solo se pueden acceder desde una parte de nuestro programa. Tiene 2 subtipos

1)Scope de Funcion: ver ej arriba: si dentro de la F declaramos otra var, esa var solo se puede acceder dentro de la F. Si la intenamos acceder de afuera (ej con clg), nos va a dar un error de referencia.
Lo mismo sucede con los parametros dentro de la F: si bien no estan declarados con var,let, const, solo se van a poder acceder dentro de la F
- Las variables que tienen scope de funcion, son accesibles dentro de toda la funcion pero no fuera de la misma 
-Variable declaradas con var siempre van a tener scope de F, sin importar en qué parte de la funcion las declaremos 


2)Scope de Bloque: bloque es toda porcion de codigo que está encerrada entre llaves {}. Puede ser un if, else, while, for, o el cuerpo de una funcion. 
Si dentro de un bloque declaramos una var con let o const, fuera de ese bloque no vamos a poder accederla (ver ej) 
Las var de bloque solo son accesibles dentro de todo el bloque pero no fuera del mismo. Las var que declaramos con let, const tienen un scope de bloque 
Las var de bloque, permancen en memoria durante la ejec de la F o bloque

    var fruta = 'manzana'; //*SCOPE GLOBAL 
    function comer(){
        var otraFruta = 'banana';
        clg('comiendo' + otraFruta)
        if(true){
            let unaFrutaMas = 'pera'
        }
        clg(unaFrutaMas) //!Error de referencia 
    }

CUAL DEBERAMOS USAR, EL SCOPE LOCAL O GLOBAL?
Como buena practica, debemos declarar las var con el scope mas reducido posible 

COMO HACE JS PARA ENCONTRAR UNA VARIABLE?
Es importante entender las jerarquias de nuestro codigo para comprender el mecanismo de busqueda 

var fruta = 'manzana';//*SCOPE GLOBAL 

function comer(){ //*Es HIJA de la F global y PADRE de "lavar"
        var otraFruta = 'banana';

       function lavar(){  //*Es HIJA de la F comer 
        clg('lavando' + otraFruta)
        clg('lavando' + fruta) //*Tambien podria acceder a la var
       }

    lavar()
    clg(comiendo + otraFruta) 

}
comer()

En la F, js primero busca la var otraFruta dentro de la propia F donde se esta ejecutando. Como esa var no esta declarada ahi, va a seguir buscando en el scope inmediatamente mas cercano, en en scope padre. Como en este caso, la encuentra, detiene la busqueda y utiliza el valor de esa var('banana'). 
Si estuviera declarada la var "fruta" tambien podia acceder. Comenzaria buscando dentro de la F siguiendo el mismo proceso de antes, hasta llegar al scope de la F GLOBAL donde finalmente encuentra la var. Este mecanismo se llama SCOPE CHAIN (cadena de scopes) y permite que las variables globales puedan ser accesibles desde cualquier parte del programa 

QUE SUCEDE SI TENEMOS EL MISMO NOMBRE DE VAR EN LOS SCOPES?

var fruta = 'manzana'; //*SCOPE GLOBAL 
function comer(){ //*Es HIJA de la F global y PADRE de "lavar"
    var fruta = 'banana'; 

    function lavar(){  //*Es HIJA de la F comer 
        clg('lavando' + fruta)
        clg('lavando' + fruta) //*Tambien podria acceder a la var
    }

    lavar()
    clg(comiendo + fruta) 

}
comer()

Js como siempre busca en dentro del scope donde esta esa linea de codigo, como no la encuentra, seguira hacia el mas cercano, donde la encontrara y usara su valor(aqui seria 'banana')
Al tener el mismo nombre(dentro de F comer y por fuera), la var del scope padre va a ser ocultada : 
-OCULTAMIENTO DE VARIABLES(VARIABLE SHADOWING): se produce cuando una var que esta en un scope mas reducido tiene el mismo nombre que otra que esta en un scope superior siguiendo su cadena de scopes. 
Para saber en que scope se encuentra cada variable, vamos al inspector y dentro de sources podemos hacer un breackpoint y dirigirnos a la solapa scopes. Alli nos aparecera el scope bloque, local y global relativos a esa linea de codigo  










*/ 