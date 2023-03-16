/*
*OBJECT.CREATE Y OBJECT.ASSIGN

*Son dos METODOS ESTATICOS de la clase OBJECT
*MEDOTO ESTATICO: es una F de la clase que no de invoca sobre las instancias, sino sobre la clase en si.
Ej. Object.create('aca va el codigo directamente')
Object.assign('aca va el codigo directamente')
(no creamos un let obj = {} y hacemos obj.create(..))

!OBJECT.CREATE
*Es un metodo estatico de la clase Object que sirve para crear un nuevo obj con el protot que le pasamos por param
Ej.

const persona = {
    saludar: function(){
        clg(`Hola mi nombre es ${this.nombre}`)
    }
}
const sacha = Object.create(persona)

El obj persona lo queremos usar como protot de otros obj, simplemmente podemos crear uno de estos obj con: 
* const sacha = Object.create(persona) //le pasamos por param el protot que queremos que tenga nuestro obj(sacha)

?Por que usar Object.create en vez de las clases de js?
Porque por mas que usemos clases con el operador new para crear nuestras instancias, Js lo traduce a otro que usa funciones constructoras y prototipos 
Su modelo de herencia/delegacion funciona por prototipos(no existen las clases )
*Object.create() es mucho mas cercano al modelo de herencia/delegacion por protot que tiene Js y es la manera mas facil de crear obj usando cierto protot sin tener q usar clases 

?Porque no usar Object.setPrototypeOf o __proto__ ?
const persona = {
    saludar: function(){
        clg(`Hola mi nombre es ${this.nombre}`)
    }
}
const sacha = {}
Object.setPrototypeOf(sacha, persona);
Aqui Js 1° le asigna el protot de Obj al obj recien creado(sacha)
2°Se lo cambia en la siguiente linea
*Esto genera problemas de performance del prog

? Como inicializamos un obj con Object.create?
*Lo que se hace por convencion es
*1°crear un metodo llamado init en el prototipo que usaremos como si fuera nuestra FConstr.
*2°Recibimos los param p inicializar nuestra instancia(nombre) y dentro los asignamos en propiedades internas(this.nombre = nombre)

const persona = {
    *init: function(nombre){
        this.nombre = nombre; 
        return this
    }
    saludar: function(){
        clg(`Hola mi nombre es ${this.nombre}`)
        return this 
    }
}
*const sacha = Object.create(persona).init('Sacha').saludar() 
(saludar es opcional)

*3° Como obj.creat nos devuelve la instancia recien creada8sacha), podemos encadenarlo con el llamado a init con el nombre que queramos que tenga nuestra instancia 
*4 Para que funcione correctamente debemos retornar this desde la funcion init y tambien lo podemos hacer desde la F saludar y asi, nos retornara correctamente nuestro nombre 
*5 Ahora si, el obj retornado se va a guardar en la var sacha
!El metodo INIT y return this van de la mano 


!OBJECT.ASSIGN()
*Es un metodo estatico de la clase Object que nos permite copiar las propiedades de uno o varios objetos hacia otro 
No es copiar, sino asignar 

? Cuales son sus usos?
*TIENE DOS USOS PRINCIPALMENTE:

*1° CLONAR UN OBJETO 
Ej.
const persona1 = {
    ojos: 'marron',
    pelo: 'negro',
    pantalon: 'amarillo'
};
*const clon = Object.assign({}, persona1)

1) Creamos una var const clon = Object.assign({}, persona1)
2) Le asignamos lo que nos retonar Object.assign, invocandola 1ero con un obj vacio({'nuesto obj destino'}) y luego como 2do param le pasamos nuesto obj origen(persona1)
!Si bien tienen las mismas propiedades, al momento de compararlos SON DOS OBJETOS DISTINTOS(tienen distintas referencias)

*2° FUSIONAR OBJETOS 
Ej
const persona1 = {
    ojos: 'marron',
    pelo: 'negro',
    sweater: 'negro',
    pantalon: 'amarillo'
    piel: 'color-1'
};
const persona2 = {
    ojos: 'verdes',
    pelo: 'negro',
    piel: 'color-piel-2'
};
const persona3 = {
    ojos: 'celestes',
    sweater: 'violeta
};

*El 1er obj tiene todas las prop y el resto solo algunas 
1) Guaramos en una var const fusion = Object.assign({},persona1, persona2, persona3), el resultado de invocar a Obj.assign con un obj vacio {} y luego con todas las personas 
2)ObAs recibe todos los param que queramos, solo sabe que el 1ero es el obj destino y el resto, todos los origenes que queramos usar
3)El orden es muy importante: toma las prop del 1er origen y se las aplica al obj destino, luego toma las del 2do y hace lo mismo: si hay prop en comun las pisa con los nuevos valores, y repite lo mismo hasta llegar al final. Eso es lo que se guarda en la var fusion.

!A tener en cuenta de Object.assign
1)Si el obj que vas a clonar tiene prop que a su vez son obj, arrays, funciones, etc, tene cuidado porque ObjAs no hace un "copiado profundo" de las prop. Es decir, copia las referencias internas que tengan los obj 
Si comparamos el obj original con el clon: persona === clon (false), pero si comparamos: persona.mascota === clon.mascota (true).
Entonces, si desp modificamos la mascota del clon: 
clon.mascota.nombre = 'Miguel', la mascota del original tamb se vera modificada persona.mascota.nombre (Miguel)
!Hay que tener mucho cuidado con hacer eso

2)El método Object.assign() copia sólo las propiedades enumerables y propias del objeto origen a un objeto destino. Usa [[Get]] en la origen y [[Set]] en el destino, por lo que invocará los métodos de acceso y establecimiento (getters y setters). Por consiguiente asignará propiedades frente a sólo copiar o definir propiedades nuevas. Esto puede hacer que sea inadecuado para fusionar propiedades nuevas en un prototipo si los objetos fuente contienen métodos de acceso (getters). (ver mozzila)

3)ObjAsig no es una F pura
Si en vez de colocar un nuevo obj vacio {} donde se van a asignar las nuevas prop en la var fusion, usamos el 1er objeto(persona1), se van a modificar todas las prop de persona1
*hay que tener mucho cuidado al usarlo 





































*/