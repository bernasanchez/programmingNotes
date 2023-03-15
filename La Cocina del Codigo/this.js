/*
*THIS EN JAVASCRIPT (BIND/CALL/APPLY)

Cambiar el valor de this nos permite reutilizar metodos entre distintos objetos. 
Como this puede cambiar, puede ser 1 obj para la primera vez que ejecutamos una F y para la 2da vez q ejec la misma F puede ser otro obj
*Hay que pensar a this como un "parametro especial" que reciben las F
!Preguntar QUIEN ES THIS O QUE VALOR TIENE THIS, es lo mismo que preguntar QUE OBJ ESTÁ EJECUTANDO LA FUNCION ESTA VEZ:
!Estamos preguntando en QUE CONTEXTO SE ESTA EJECUTANDO LA F. 

? QUE ES EL CONTEXTO? 
Es el objeto q esta ejec una F en un momennto especifico 
Tiene que ver con el valor de this. El obj q esta ejec la F en un momento específico

? QUE ES EL CONTEXTO de EJECUCION? 
Tiene que ver con la pila de ejecucion
Cada vez que js ejecuta una F, crea un contexto de ejec para esa F, cargando en memoria tdo lo necesario para ejecutarla(ver que guarda)

*EJEMPLO HARRY POTER Y THIS 
1)Aqui el metodo de un obj(this.nombre) accede a una prop interna del mismo para imprimirla por consola 

const harry = {
    nombre: 'Harry',
    saludar: function(){
        console.log(`hola, me llamo ${this.nombre}`)
    }
}
harry.saludar() //*Hola, me llamo Harry

2) Cuando guardamos el metodo en una var y la ejecutamos: 
Ej. const saludar = harry.saludar
saludar() //!Hola, me llamo undefined.
*Cuando la invocamos de manera suelta, como no estamos en modo estricto, this es el obj global y este no tiene una prop "nombre". Por eso da ese resultado 


3) Si obtenemos un elem del DOM y lo guardamos en una var  y le agregamos un evento : 

const harry = {
    nombre: 'Harry',
    saludar: function(){
        console.log(`hola, me llamo ${this.nombre}`)
    }
}

const boton = document.getElementById('miBoton');
boton.addEventListener('click', harry.saludar )

Aparecera el error: //!Hola, me llamo undefined.
Que es lo que esta pasando? this es el obj q esta ejec la F. Si vemos 
undefined es porq ese obj no tiene la prop nombre. Es decir éste no es el objeto que esta ejec la F (se refiere a harry). 
*Cuando trabajamos con eventos del DOM, this por defecto, es el elemento que dispara el evento(el boton).


*PENSAR THIS COMO UNA GOMITA ELASTICA:
Metafora con palo de amasar: Palo = F que usa this + OBJ. 
Deberíamos "enlazar" el obj a la funcion con ese this para que cuando se ejecute lo haga en el contexto correcto.
Pero si no le enlazamos ningun valor, js decide por nosotros y podemos tener resultados no deseados 


*BINDING/ENLAZAMIENTO:
Asignar el valor q va a tomar this cuando se ejecute la F
Existen varios TIPOS DE ENLAZAMIENTO: 
*5) Default Bindig (Enlazamiento por Invocacion Directa)

function quienSoy(){
    clg('Hola, yo soy:' , this)
}
quienSoy();

Se da cuando tenemos una F "normal" (no arrow F), y la invocamos directamente. 
?Que valor va a tener this por defecto? 
this = obj Global (window o nodeJs)
*this(modo estricto) = undefined 
*Una buena practica es NO USAR THIS en las FUNCIONES GLOBALES PORQUE NO VA A ESTAR DEFINIDO

*4) Implicit Bindig (Invocacion de Metodo)
*SE PRODICE CUANDO INVOCAMOS AL METODO DE UN OBJETO 

const sacha = {
    nombre: 'Sacha',
    saludar: function(){
        console.log(`hola, me llamo ${this.nombre}`)
    },
    hermano: {
        nombre: 'Eric',
        saludar: function(){
            console.log(`Yo, el hermano me llamo ${this.nombre}`)
        },
    }
}

Si queremos saludar lo hacemos de esta manera:
*sacha.saludar() Invocamos al metodo saludar de sacha
*sacha.hermano.saludar() Invocamos al metodo saludar de sacha.hermano
El enlaz implicito es cuando invocamos una funcion y antes aparece un punto y cuando se ejecute, this en c/caso va a ser el 1er objeto que este a la izq del punto.

*3) Explicit Bindig (Enlazamiento Explicito/InvocacionIndirecta)
*Sirve para que nosotros elijamos exactamente que objeto queremos que sea this cuando se ejecuta una F. Nos permite cambiar el contexto de manera explicita 
*EXISTEN TRES METODOS PARA REALIZAR EL EXPLICIT BINDING:

!1)FUNCTION.PROTOTYPE.CALL
*UN METODO QUE NOS PERMITE INVOCAR UNA FUNCION CAMBIANDOLE EL CONTEXTO(cambiando el valor que va a tomar this)

const sacha = {
    nombre: 'Sacha',
    saludar: function(gritando, conDespedida){
        const saludoNormal = `Hola me llamo ${this.nombre};
        const despedidaNormal = 'Chau';

        const saludo = gritando? 
            saludoNormal.toUpperCase() : saludoNormal; 
        const despedida = gritando? 
        despedidaNormal.toUpperCase() : despedidaNormal; 

        clg(saludo)

        if(conDespedia){
            clg(despedida)
        }
    },
};

?Como hacemos p invocar este metodo sobre otro obj con prop nombre?
*const pepe = {nombre: 'pepe'}
*Opcion 1: pepe.saludar = sancha.saludar (enlazamiento implicito)

*Opcion 2 con Call:
*sacha.saludar.call(pepe, true, true)
*El primer parametro que recibe call es el nuevo contexto(pepe), el objeto que va a ser this.
*Luego, los param que va a recibir la F, separados por coma(true, true)
En conclusion, el METODO SE LLAMA SOBRE EL OBJ Q LE PASAMOS

!2)FUNCTION.PROTOTYPE.APPLY
*sacha.saludar.apply(pepe, [true, true])
*El primer parametro queda igual y el resto que recibe la F en forma de array

!3)FUNCTION.PROTOTYPE.BIND
*METODO QUE TIENEN TODAS LAS F DE JS QUE NOS RETONAR UNA NUEVA F CON EL CONTEXTO ENLAZADO AL OBJETO QUE LE DIGAMOS. NOS DEVUELVE UNA NUEVA F CON EL VALOR DE THIS Q NOSOTROS LE DIGAMOS. 

Ej: const sacha = {
    nombre: 'Sacha',
    saludar: function(){
        console.log(`hola, me llamo ${this.nombre}`)
    }
}
const boton = document.getElementById('miBoton');
boton.addEventListener('click', sacha.saludar.bind(sacha))

*Nos aseguramos que la F que se ejecuta al hacer click esta enlazada al obj correcto
!Una funcion que fue creada con bind no puede volver a ser enlazada a otro obj(por eso se lo conoce como el metodo de "enlazamiento fuerte")

*2) New Bindig (Instanciar Objetos)
Para instanciar obj podemos usar la 1)funcion constructura o las clases con constructores.

function Persona(nombre){
    this.nombre = nombre;
}
*const sacha = new Persona('Sacha')
!Pasos de New Bindig: 
*1-Cuando instanciamos obj con new: estamos produciendo un enlazamiento
*2-Cuando usamos new, se crea un obj vacío({}) e invoca a la F constructora con ese obj({}) como valor de this
*3-Ejecuta la F: le agrega al obj la prop nombre {nombre: 'Sacha'} con el string q le pasamos
*4-Al invocarla con "new", no es necesario el return this ya que esta implicito en la ultima linea
*5-Luego, ese obj creado se guarda en la var sacha(ver arriba)

*1) Lexical Bindig (Arrow Functions)
 
Ej. const sacha = {
    nombre: 'Sacha',
    twitter: '@sachalifs',
    saludar: function(){
        *const seguimeEnTwitter = () => {
            *clg('Seguime en : ${this.twitter})
        *}

        console.log(`hola, me llamo ${this.nombre}`)
        *seguimeEnTwitter(); 
    }
}; 

sacha.saludar()
Ahora no exite el problema de antes(de this) por las siguientes razones: 
*1- this va a ser el objeto sacha(el valor que queremos). GRACUAS A Q LAS ARROW F SE EJECUTAN EN EL MISMO CONTEXTO EN EL Q FUERON CREADAS
*2- La F es cargada en memoria recien cuando ejecuta el metodo saludar de sacha: Cuando la crea, js ve que valor tiene this en ese momento y ese es el valor con el que queda enlazada a la AF
*No podemos cambiarle el contexto con call/appli/bind
*EL LEXICAL BINDING DE LAS AF NOS AYUDA A Q LAS F MAS PEQUEÑAS SE EJECUTEN EN EL MISMO CONTEXTO EN Q FUERON CREADAS(EN F MAS GRANDES), SIN TENER Q ENLAZARLAS CON BIND EXPLICITAMENTE 

!LOS OBJETOS NO CREAN NUEVOS CONTEXTOS (TENER EN CUENTA EN GENERAL)


*/

