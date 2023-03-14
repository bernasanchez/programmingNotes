/*
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
1)USAR SUSTANTIVOS PARA NOMBRAR CLASES: 
el nombre de la clase debe ser un sustantivo. Es clave, ya que cuando hblamos de clases, hablamos de entidades que pueden ser del mundo real o abstractas. En definitiva, para hablar de "cosas" usamos un sustantivo
2)USAR PascalCase : facilita le lectura y comunicacion
3)CONSTRUCTORES SINCRONOS: los construct de las clases son F sincronas. Las cosas asincronas se realizan fuera del constructor (ej un calculo). 




*2)FABRICAS/FACTORIES EN JS 
!ES UNA SIMPLE FUNCION CUYO OBJETIVO ES RETORNAR/CREAR UN NUEVO OBJETO. Aceptan parametros para inicializar cada obj o para indicar como querems que sea creado
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
1) Si preferis la Prog Funcional: usamos F tambien para crear obj
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
1)Planos para construir una casa vs Fabricas para construir muchos obj
2) Prog Orientada Objetos vs Prog Funcional 
3) Los obj creados a partir de las clases son instancias de la clase vs obj creados x fabricas son simples objetos (instancias de la clase object)
4)Clases: agregan COMPORTAMIENTO a traves de metodos de instancia vs los obj creados x fabricas suelen ser solo prop agrupadas. 
5)Sustantivo p crear clases vs VERBOS para crear nombres de fabr
6)Clases: nombradas con PascalCase vs camelCase para fabricas
7)Constructores de Clases: no usamos return this(esta implicito cuando usamos el operador new) vs Fabricas: como no son llamadas con new, si tenemos que retornar el obj recien creado 
8) Ambas SON SINCRONAS: si tenemos q realizar alguna operac asincrona que sea antes de crear al objeto.






























*/

class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`); 
    }
}
const sacha = new Persona('Sacha');

const crearPersona = ({nombre, apellido, twitter} = {}) => ({
    nombre: nombre ?? 'Juan', 
    apellido: apellido ?? 'Nadie',
    twitter: twitter ?? 'juan_nadie'
});