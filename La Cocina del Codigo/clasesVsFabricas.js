/*
*CLASES EN JAVASCRIPT 

? QUE ES UNA CLASE?
*Una clase es como un molde que define QUÉ PROPIEDADES Y MÉTODOS van a compartir un grupo de objetos.
Ej. Es como un molde para hacer galletas. Todas las que hagamos con ese mismo molde van a salir de la misma manera

? QUE ES UNA INSTANCIA?
*Es un objeto creado a partir de una clase 
*Ej. const sacha = new Persona('Sacha'): sacha es una instancia de la clase Persona

!EN JS EN REALIDAD NO EXISTEN LAS CLASES 
*EN JS EXISTE UN MODELO DE HERENCIA POR PROTOTIPOS O MODELO DE DELEGACION DE OBJETOS 

*UNA CLASE Y SU CONSTRUCTOR SON LO MISMO EN JS

!FUNCION CONSTRUCTORA 
*SON FUNCIONES COMUNES/CORRIENTES Q USAMOS PARA CREAR INSTANCIAS DE UNA CLASE Y NOS PERMITEN REUTILIZAR EL CODIGO DE INICIALIZACION DE UNA INSTANCIA, CADA VEZ QUE QUERAMOS CREAR UNA

*Para crear la clase Persona, vamos a escribir una F: 
y para crear una persona, necesitamos un nombre, debe aceptar ese parametro
? Cual es su estructura?
1) El nombre de la FConst se escribe con PascalCase
2) Si tenemos una FConst debe ser invocada con new

function Persona(nombre){
    this.nombre = nombre; //*Cuerpo de la FConst
    //*this = {nombre: 'Sacha'}
    //*return this (esta implicito gracias a new)
}
*const sacha = new Persona('Sacha')
*Cada vez q instanciemos un obj de la clase Persona, se va a ejecutar la Funcion de arriba(const sacha = new Persona('Sacha'))

?Que hace el operador New ?
Cada vez que creamos una instancia de una clase, utilizamos el operador new antes de invocar a la FConst
Este operador realiza lo siguiente: 
1) Genera un obj vacio sin nada adentro: {}
2) Invoca a la FConst con this apuntando a {} (this = {})
3) this.nombre = nombre
-this.nombre: el obj q esta siendo inicializado recibe una prop llamada nombre {nombre}
-nombre: es el valor que recibimos por parametro{nombre:'Sacha'}
4)Lo ultimo que hace new luego de ejecutar la FConst: retornar this. Nos devuelve el obj q acabamos de crear e inicializar 

? Como se usan los prototipos en Js ?
*JS NO TIENE CLASES. ES AZUCAR SINTACTICA. 
*EL LENGUAJE ESTA BASADO EN PROTOTIPOS

*Persona.prototype: 
!Todas las F que no sean ArrowFunc(AF), tienen una propiedad llamada prototype. 
!Prototype tiene asignada un objeto = {}

? Como se usa esta propiedad prototype? 
*1) Cuando usamos el operad new: js crea un {} vacio 
*pero lo crea asignandole como prototipo, la propiedad prototype de la FConst que hayamos usado: 
*{__proto__ : Persona.prototype}

?Como funciona la cadena de prototipos?
Ej: sacha.toString()
*Cuando queremos acceder a una prop sobre un objeto o ejecutar un metodo sobre el mismo: 
*1° Js se fija si esa prop o metodo existen en ese obj : sacha 
*2° Si no existe ahi se fija si existe en su prototipo a traves de la prop __proto__ Persona.prototype
*3° Si tampoco la encuentra, sigue avanzando por la cadena a ver si lo encuentra en el siguiente eslabon __proto__ Object.protot
Y así hasta que encuentre la prop que andaba buscando o nos devuelva undefinded 
*La cadena seria asi: 
!sacha -- __proto__ Persona.prototype -- __proto__ Object.protot

*Entonces si queremos AGREGAR una prop/metodo p que cada instancia de nuestra clase pueda acceder, lo que tenemos que hacer es agregarla como propiedad de su prototipo (Persona.prototype):
? Como lo hacemos? 
Persona.prototype.saludar = function (){
    clg('Hola, mi nombre es ${this.nombre})
}
*Agregamos un metodo sobre el prototipo de persona,  para que las instancias puedan saludar por clg imprimiendo su nombre 
*const eric = new Persona('Eric')
*const vicky = new Persona('Vicky')
Ahora si la invocamos: vicky.saludar() o eric.saludar(), se imprime su nombre por consola, ya que pueden usar el metodo creado anteriormente. 

? Como sabemos que un objeto es instancia de una clase? 
!Usamos el OPERADOR INSTANCEOF: puedo verificar si la propiedad prototype de una clase aparece en algun lugar de la cadena de prototipos de un objeto.
Ej. sacha instanceof Persona; //true
sacha instanceof Object; //true

!RESUMEN
1)Js no tiene clases como otros lenguajes, es un lenguaje basado en prototipos 
2)Cualquier F en js que no sea una AF, puede ser usada como FConstr
3)Usamos FConst para crear nuevas instancias de una clase
OPERADOR NEW: 
1° Crea obj vacio con el protot de la clase 
{__proto__ : Persona.prototype}
2° Invoca a la FConst con este obj como valor p this 
3° Ejecuta el cuerpo de la FConst p inicializar los valores en el obj creado 
4° Al llegar al final, implicitamente retorna el obj creado, que se termina guardando en la var sacha
----
5)Para agregar prop/metodos comunes para todas las instancias, usamos el prototipo de nuestra clase: 
ej. Persona.prototype.saludar ... 
-------
6)El operador instanceof nos dira si el prototipo de la clase aparece en algun lugar de la cadena de prototipos del objeto:
ej. sacha instanceof Persona // true
7)ECMASc15: clases con sintaxis mas clara y familiar

---------------------------otro video---------------------------

*MANERAS DE CREAS OBJETOS EN JS

*1)CLASES EN JAVASCRIPT
!LAS CLASES SON COMO EL PLANO DE UNA CASA: tienen todos los detalles de COMO van a ser construidas las casas que sigan ESE PLANO.
!Una CLASE en js ES UNA PLANTILLA para CREAR OBJETOS que define los datos que tendran esos objetos y metodos que pueden ejecutar 
- Tienen un constructor que es una F que se ejecuta cuando creamos un nuevo obj con el operador new.
Sirve para inicializar el obj con los valores iniciales que queremos que tenga.
- No tenemos que escribir return this, lo hace implicitamente el constructor cuando invocamos a la clase con new 

class Persona{
    constructor(nombre){ //*F para crear obj
        this.nombre = nombre;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`); 
    }
}
const sacha = new Persona('Sacha'); 

? CUANDO USAR CLASES? 
Es buena utilizarla en 2 situaciones: 
1) Comodidad para la POO(si el equipo se siente mas comodo)

2) Crear entidad importante y expresarla con un diseño de software elegante: es decir crear una clase que exprese claramente qué es lo que hace y cómo lo hace 

*CONVENCIONES PARA USAR CLASES 
*1)USAR SUSTANTIVOS PARA NOMBRAR CLASES: 
!el nombre de la clase debe ser un sustantivo. Es clave, ya que cuando hablamos de clases, hablamos de entidades que pueden ser del mundo real o abstractas. En definitiva, para hablar de "cosas" usamos un sustantivo
*2)USAR PascalCase : facilita le lectura y comunicacion
*3)CONSTRUCTORES SINCRONOS: los construct de las clases son F sincronas. Las cosas asincronas se realizan fuera del constructor (ej un calculo). 


*2)FABRICAS/FACTORIES EN JS 
!ES UNA SIMPLE FUNCION CUYO OBJETIVO ES RETORNAR/CREAR UN NUEVO OBJETO. Aceptan parametros para inicializar cada obj o para indicar como queremos que sea creado
!PENSAR A LAS FABRICAS COMO FABRICAS QUE CREAN MUCHOS OBJETOS
- Podemos invocar una F llamada crearPersona sin el operador new
- Esta F nos retorna un obj con la prop nombre y el metodo saludar para imprimir su saludo x consola
- Se puede escribir tambien como arrow function

function crearPersona(nombre){
    return { //*Obj retornado
        nombre,
        saludar(){
            console.log(`Hola, me llamo ${this.nombre}`); 
        },

    };
};

const sacha = crearPersona('Sacha'); //*Funcion invocada

? CUANDO USAR FABRICAS? 
*1) Si preferis la Prog Funcional: usamos F tambien para crear obj
Ej. const crearPersona = ({nombre, apellido, twitter} = {}) => ({
    nombre: nombre ?? 'Juan', //*Valores por defecto
    apellido: apellido ?? 'Nadie',
    twitter: twitter ?? 'juan_nadie'
});
-A la fabrica le pasamos los valores iniciales que queremos que
tenga nuestra persona ({nombre, apellido, twitter}) y ésta completa con valores por defecto para las prop requeridas para las que no le dimos valores 
-Nos devuelve un obj simple, sin metodos. Los metodos los extraemos sobre objetos separados. 

2)Se usan para hacer TESTING (Ver test en video)

!Si usas FABRICAS, es importante el BUEN USO DE LA MEMORIA: 
Si los obj que creamos tienen metodos, por cada obj creado, js va a crear una nueva F y eso significa espacio en memoria. Ej:  

const crearPersona = ({nombre, apellido, twitter} = {}) => ({
    nombre: nombre ?? 'Juan', //*Valores por defecto
    apellido: apellido ?? 'Nadie',
    twitter: twitter ?? 'juan_nadie',
    saludar: function(){ //*EVITAR ESTO 
        clg(Hola me llamo ${this.nombre}...etc)
    }
});

!LO RECOMENDABLE ES MOVER LA F APARTE PARA QUE SEA DECLARADA UNA SOLA VEZ:
const emitirSaludo = persona => {
    clg("Hola me llamo" + ${persona.nombre}...etc)
}


*CONVENCIONES/BUENAS PRACTICAS PARA USAR FABRICAS
1)Verbos en Infinitivo: que represente la accion de fabricar. Ej: crear, construir, etc. 
2)camelCase: crearUsuario(), crearAlbum()


!COMPARACION CLASES VS FABRICAS
*1)Planos para construir una casa vs Fabricas para construir muchos obj
*2) Prog Orientada Objetos vs Prog Funcional 
*3) Los obj creados a partir de las clases son instancias de la clase vs obj creados x fabricas son simples objetos (instancias de la clase object)
*4)Clases: agregan COMPORTAMIENTO a traves de metodos de instancia vs los obj creados x fabricas suelen ser solo prop agrupadas. 
*5)Sustantivo p crear clases vs VERBOS para crear nombres de fabr
*6)Clases: nombradas con PascalCase vs camelCase para fabricas
*7)Constructores de Clases: no usamos return this(esta implicito cuando usamos el operador new) vs Fabricas: como no son llamadas con new, si tenemos que retornar el obj recien creado 
*8) Ambas SON SINCRONAS: si tenemos q realizar alguna operac asincrona que sea antes de crear al objeto.





*/

// class Persona{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     saludar(){
//         console.log(`Hola, me llamo ${this.nombre}`); 
//     }
// }
// const sacha = new Persona('Sacha');

// const crearPersona = ({nombre, apellido, twitter} = {}) => ({
//     nombre: nombre ?? 'Juan', 
//     apellido: apellido ?? 'Nadie',
//     twitter: twitter ?? 'juan_nadie'
// });