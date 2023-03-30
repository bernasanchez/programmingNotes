/*
*HERENCIA POR PROTOTIPOS EN JAVASCRIPT
*DELEGACION DE OBJETOS (MEJOR LLAMARLO ASI)


? QUE ES LA HERENCIA EN PROGRAMACION? 

*HERENCIA POR CLASES(este es el tradicional en otros lenguajes):
Uno de los pilares de la prog orientada a OBJETOS
*Este metodo permite que una clase herede los metodos/prop definidas en otra clase 
De esta manera, los obj de una subclase van a tener acceso no solo a sus prop/metodos, sino tambien en loq q esten definidos en la superclase

*HERENCIA POR PROTOTIPOS EN JS 

?QUE ES UN PROTOTIPO ? (PROTOTYPE)
*Es como un DELEGADO: alguien a quien le delegamos algo, cierta responsabilidad 
*Ese "alguien" (que realiza la tarea por vos), es el prototipo
Ej. Tenemos dos objetos que queremos "relacionar": 

const chef = {
    tipo: 'cocina basica',
    cocinar: function (plato){
        clg(`cocinando ${plato}`);
    }
};

const sacha = {
    nombre: 'sacha',
    edad: 31,
    profesion: 'developer',
    tipo: 'Front-End',
};

Object.setPrototypeOf(sacha, cheff) //*Con esto realizamos la conexion entre ambos objetos 

cheff.cortar = function(ingrediente){
    clg('cortando ${ingrediente} ');
}

sacha.cortar('zanahoria')

?Como hacemos para conectarlos? (esa es la idea de la delegacion)

*1) Asignandole a sacha un valor para su prop oculta llamada "__proto__" : sacha.__proto__ = cheff
*Todos los obj tienen esta prop oculta y para conectarlo con el chef se lo asignamos asi
(Usar proto NO ES MUY ACOSNSEJABLE)

*2) Otra manera es usando la F:
*Object.setPrototypeOf(sacha, cheff)
La F recibe 2 param : sacha, cheff : el primero es el obj al cual queremos cambiarle el prototipo(sacha), y el 2do es el obj que queremos que sea el protot del 1ero(cheff)
(Esta opcion TAMPOCO ES TAN ACONSEJABLE PARA UNA APP REAL)

*Con esto realizamos la conexion entre ambos objetos: tenemos al obj sacha y a su prototipo cheff
Esto significa que si ejecutamos sacha.nombre, podemos acceder a su nombre, edad, y a su profesion. Como tambien pedirles que cocine algo: sacha.cocinar('milanesa')

*PROTOTYPE CHAIN:
Cuando ejec una prop o un metodo, js se fija si existe en ese obj. Si existe la ejecuta sin problemas. Ahora si no existe LA BUSCA EN EL PROTOTIPO(aqui seria cheff) y la ejecuta si la encuentra. Por esto mismo: 
*En JAVASCRIPT ES MEJOR HABLAR DE "DELEGACION DE OBJETOS" QUE HERENCIA POR PROTOTIPOS

!DELEGACION DE OBJETOS 
*Objetos que le "van pidiendo cosas" a otros objetos(a sus prototipos)
*LOS PROTOTIPOS: son obj comunes/corrientes.Como todos los obj, los protot sin dinamicos
Ej. Si le agregamos al obj cheff un metodo cortar: 

cheff.cortar = function(ingrediente){
    clg('cortando ${ingrediente} ');
}

sacha.cortar('zanahoria')

El obj sacha va a poder acceder perfectamnete a ese metodo: sacha.cortar('zanahoria'), porque la busqueda se hace en TIEMPO DE EJECUCION. Cuando quiere acceder a ese metodo, la busqueda comienza en sacha y luego cntinua en su protot cheff que sí tiene el metodo "cortar"
!Diferente hubiera sido, si invocabamos al metodo antes de agregarlo, ya que al momento de invocarlo éste no existe ni en sacha, ni en cheff(su prototipo)

? Que pasa si un obj y su protot tienen una prop que se repite?
? A cual accede Js ?

Cuando queramos acceder a la prop sacha.tipo, primero accedería al valor que se encuenta en el obj, porque como dijimos antes, la busqueda comienza en el obj en sí, pero si no se encuentra ahi, la busqueda continua en el prototipo
*Esto se llama OCULTAMIENTO DE PROP(Property Shadowing): ocultar prop/metodos que se encuentran en el prototipo de un obj porque repiten el mismo nombre
A veces lo hacemos adrede para ejecutar el metodo/prop del obj y no el que está en el protot
Esta "busqueda" nos lleva al sig tema: 

*PROTOTYPE CHAIN/CADENA DE PROTOTIPOS
Todo el tiempo usamos prototipos en js: cuando escribimos un obj literal, un array, una F, una fecha. Es decir, cuando usemos cualquier cosa que no sea un valor primitivo
Si abrimos la consola y vemos el obj "sacha", nos damos cuenta que tiene muchas prop: no solo las propias del obj(nombre,edad,etc) y las de su prototipo(cocinar,cortar), sino tamb una serie de propiedades mas(__proto__, costructor, valueOf, etc)..

? De donde salen esas propiedades ?

*Nos damos cuenta que cheff NO ES EL PROTOTIPO FINAL para sacha: cada vez que queremos acceder a una prop en sacha, 1° se fija si existe en ese obj, si no se encuentra 2°busca en su protot que es cheff y 3° si no se encuentra ahi entocnes se va a busca a un PROTOTIPO QUE COMPARTEN TODOS LOS OBJ EN JS: 
*Para los obj como sacha/pepe este prototip se encuentra en Object.prototype
Si abrimos la consola, vemos que es un OBJETO QUE CONTIENE TODOS ESOS METODOS/PROP (que vimos antes). Por ej: 
el metodo sacha.toString hacen referencia al metodo definido en este protitipo: Object.prototype(se encuentran ahi). 
*Object.prototype.toString === sacha.toString //true 

!OBJECT.PROTOTYPE: ES EL PROTOTIPO DE TODOS LOS OBJ EN JS 
!Los arrays tienen el suyo: Array.prototype
!Las funciones tienen el suyo: Function.prototype
!Las fechas tienen el suyo: Date.prototype
!Las expresiones regulares: RegExp.prototype
!(Todos los tipos de datos complejos lo tienen)

!TODO TIPO DE DATO COMPLEJO ES UN OBJETO ES LITERAL
*Por ej. el protot de los arrays es: Array.prototype, pero a su vez, su prototipo es Object.prototype(esta por encima de la cadena). Es decir, los arrays tienen todas las prop/metodos que "heredan/delegan" de los objetos y tambien definen sus propias prop/metodos. Lo mismo sucede con el resto de los prototipos. TODOS TERMINAN ENLAZADOS CON EL PROTOTIPO DE LOS OBJETOS. Esto es asi por defecto en js. 

?Pueden reescribir algun metodo? 
Si, lo pueden hacer
const numeros = [1,2,3] //'1,2,3'
const sacha = {nombre: 'Sacha'} //'[object Object]'

*Por ej. el metodo toString de los arrays no es el mismo que el de los objetos: numeros.toString === sacha.toString // false
Devuelve ese resultado, ya que js no sabe como queremos convertir nuestros obj en string y hace "lo que puede"
*Solucion: "pisamos" ese metodo en nuesto objeto y evitamos que se ejecute el metodo q se encuentra en Object.prototype
const sacha = {
    nombre: 'Sacha',
    toString(){
        clg(this.nombre)
    }
}; 

? Hay algo mas alla de Object.prototype? 
? Cual es EL FINAL DE LA CADENA?
Despues de Object.prototype no hay nada mas. Solo "null"
*Si buscamos una prop en la cadena y no la encuentra, finalmente va a retornar undefined: basicamente que esa prop no esta definida. Ej const pepe = {nombre: 'Pepe'}, pepe.edad //undef

!Importante: la cadena de protot siempre se recorre cuando queremos LEER una propiedad o EJECUTAR un método, NO CUANDO QUEREMOS RELIZAR UNA ASIGNACION.
Ej. si agregamos al objeto sacha un metodo: 
sacha.cocinar = function(){
    clg('yo no se cocinar)
}
!Esta F se agrega al obj sacha pero el prototipo no se ve modificado(cheff). Como estamos ASIGNANDO UNA PROP NO SE RECORRE LA CADENA DE PROTOTIPOS. Esta solo se recorre cuando queremos leer una propiedad

? Como saber si un obj es el prototipo de otro?
*1) Si queremos saber si cheff es el protot de sacha: 
sacha.__proto__ === cheff //true
Como esta prop apunta directamente al protot del obj, en este caso van a ser iguales (no deberiamos usarla)

*2)Otra forma mas prolija: cheff.isPrototypeof(sacha) //true
Este metodo esta presente en todos los obj y nos sirve para saber si un obj es el prototipo del que le pasamos por param
Se fija si ese obj aparece en algun lugar de la cadena de prototipos del otro objeto(el pasado por param)
Si reemplazamos cheff por: 
Object.prototype.isPrototypeof(sacha) // true 
Tambien veremos que si, ya que éste tambien se encuentra en la cadena de protot de sacha como en la de todos los obj

? Como imaginarnos la cadena ?
*sacha --- cheff --- Object.prototype 
*1°   ---     2°   ---     3°


*LA CADENA DE PROTOTIPOS Y THIS 
*Ej. le agregamos el metodo "presentarse":

const chef = {
    tipo: 'cocina basica',
    cocinar: function (plato){
        clg(`cocinando ${plato}`);
    }, 
    *presentarse: function(){
        *clg(`Hola, soy un cheff especialista en ${this.tipo}`)
    *}
};

const sacha = {
    nombre: 'sacha',
    edad: 31,
    profesion: 'developer',
    tipo: 'Front-End',
};

Object.setPrototypeOf(sacha, cheff) //*Con esto realizamos la conexion entre ambos objetos 

cheff.cortar = function(ingrediente){
    clg('cortando ${ingrediente} ');
}

sacha.__proto__.cocinar = function(){
    clg('yo no se cocinar)
}

*Cuando ejecutemos el metodo sobre sacha: sacha.presentarse()
? Cual sera el "tipo" que veamos impreso? El de cheff o el de sacha? 
En este caso realiza el enlazamiento implicito, donde ejecutamos el metodo de un obj. Por eso el valor que va a tomar this es el obj que esta A LA IZQ del punto: sacha.
Por lo tanto this va a ser sacha = 'Hola soy un cheff especializado en Front-End'


*4 MANERAS DE USAR PROTOTIPOS EN JS

!1) OBJETOS LITERALES
-Un obj
-Un array
-Una funcion
Js se encargara de asignarle el prototipo segun cada caso

!2)Objetc.create(proto) /Metodo estatico
*Este metodo recibe por param un prototipo(cheff) y nos devuelve un nuevo obj(sacha), cuyo prototipo es el que le pasamos por param: const sacha = Object.create(cheff)

!3)FConst y clases

!4) Object.setPrototypeOf(obj, proto) y __proto__
*A)Object.setPrototypeOf(sacha, cheff)
*B)sacha.__proto__ = cheff; 










*/