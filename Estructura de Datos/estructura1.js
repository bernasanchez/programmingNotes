/*
*ESTRUCTURA DE DATOS: PROGRAMACION ORIENTADA A OBJETOS

!1)CONCEPTOS

?Porque aprender ED? (ver ejemplos)

*ABSTRACCION
Proceso de aislar conceptaulamente las prop, caract/funcionalidades de un objeto. Formar una nocion de obj a traves de sus rasgos escenciales
Ej. del Auto: al ver la img sabemos que es un auto porque tiene ciertas caracteristicas(motor, tamaño, color, etc)

?Que tiene que ver con la programacion?
Ej fiesta, que comprar para dif invitados? = hacer una lista de compras

*1)ABSTRACT DATA TYPE(ADT)/TIPO DE DATO ABSTRACTO
!Un tipo de dato abstracto es un modelo matematico compuesto por un conjunto de operac definidas sobre un conjunto de datos 
*Resumen: 
*-Conjuto de valores
*-Conjunto de operaciones
*-Cumple con el principio de abstraccion: repesentacion conceptual, una abtraccion q determina un conjunto de operac para acceder a los datos. 
!La def de un ADT solo menciona que operac se realizara, pero NO COMO SE IMPLEMENTARAN estas operac. Es decir, tener la solucion pensada no significa tenerla escrita en codigo
Ej.Fiesta: sabemos q tenemos q hacer una lista pero aun no la implementamos y para hacerla podmeo usar por ej:papel-lapicera, o usar el cel

?Como implementamos un ADT?
*2)DATA STRUCTUTRE(DS)
*Ahi sí determinamos como usar la memor y los algorit para realizar las operaciones
!Es una forma de organizar, gestionar, almacenar info, permitiendo el acceso y modificac de la misma de un modo eficiente
!Es la implementacion de un ADT
Ej. si tengo q ir de un lugar a otro, como hago?: 
*1)tengo diferentes formas de transportarme: el modo de transportarme es el ADT
*2)El transporte que elijo: es la estructura de datos. 
*Un ADT puede ser implementado utilizando distintas DS(ver video)
*Un ADT puede ser implementado utilizando distintas DS

!2)ABSTRACT DATA TYPES MAS COMUNES
*1)LIST(ADT)
*Una lista contiene elem del mismo tipo ordenados de forma secuencial, es una coleccion de items ordenados:
INDEX: 0 1 2 3 4 5 6 
VALUE: P R O G R A M 
*El dato se guarda en cada nodo de la lista
Ej una receta: se pueden realizar la sig operaciones:
-get(): devuelve un elem de la lista en cualq posic dada
-insert(): inserta en un elem .. (idem)
-remove(): elmina la 1era aparicion de un elem dado de una lista no vacia
-removeAt: elmina el elem p una ubicac especifica dada, siempre que la lista no este vacia
-replace: reemplaza un elem en cualq posic por otro elem
-size: devuelve el num de elem de la lista
-isEmty: devuelve true si la lista esta vacia, de lo contrario, false
-isFull: true si la lista esta llena; de lo contrario, false

*2)STACK/PILA (ADT): pensar en Pila de Ejec
*Contiene elem del mismo tipo , ordenados de forma secuencial, igual q la lista, sin embargo, a dif de esa: todas las operac tienen lugar en un solo lugar de la pila, es decir, en la parte superior.
*Podemos pensarla como una pila de platos: si quiero sacar uno, empiezo por el ultimo ingresado, y asi sucesivamente. Esto es igual a principio LIFO(last in- first out)
Resumen:
-coleccion de elem
-ordenados de forma secuencia
-se pueden repetir elem
-tipo LIFO
*-Operaciones:
  1)Push(add)
  2)Pop(remove)
  3)Peek(devuelve el elem de la parte sup de la pila pero sin eliminarlo )
  4)Size: devuelve cant de elem de pila 
  5)isEmpty
  6)isFull
Ej para ilustrar este ADT: correo q entrega paquetes desde un camion. Como lo hago? El ultimo paquete que guardo, seria el primero que llevo a destino

*3)QUEUE/COLA (ADT)
*IN ----> DATA DATA DATA DAT DATA DATA DATA -----> OUT 
*-Es una coleccion de elementos
*-Odenados de forma secuencial
*-Se pueden repetir elem
!Algo caracteritico de la Queue:
*1)Las op se dan en ambos extremos 
*2)La insercion siempre es al final de la cola y la eliminac de un elem al comienzo de la misma
*3)Tipo FIFO(First In-First Out)
*4)Operaciones:
  1)Enque(add): agregar elm al final de cola
  2)Deque(remove): elimina y devuelve el 1er elem de la cola
  3)Peek: devuelve el 1er elm o el ultimo segun elijamos, pero sin eliminarlo
  4)Size: devuelve el num de elem
  5)isEmpty: true/false
  6)isFull: idem ant
  

!ADT MAS AVANZADOS 
?como almacenar historial de dueños de c/auto?
-Patente y nombre dueño
-Key + Value
-Debemos buscar una patente especifica para una lista de dueños determinados, es decir, para una patente, le corresponde una lista de dueños 

*1)Dictionary(ADT)
-Map, Simbol table o Asocciative array
-Coleccion desordenada de datos
-Guarda en pares key-values
-Las keys son unicas y nos permiten acceder a los valores asociados(ej. string o integer)
-Los valores pueden ser de cualquier tipo
Operaciones
Insert
Get
Delete
Put 
Size
isEmpty
Ej. lista de precios(item:precio), diccionario(palabra:significado), alumnos de escuela(alumna:ficha datos)

*2)TREE(estructuras recursivas)
-Estructura jerarquica 
*-Cada nodo contiene un valor y un puntero a otros nodos
*-Cada nodo debe estar conectado a un par
*-Existe um nodo primario: root o raiz
-No hay circuitos cerrados(ciclos)
Ej. el DOM
?Por que usarlos?
*-Almacenar info con jerarquias
- Acceso y busqueda a velocidad moderada
- Insercion y eliminacion moderada
- No tienen limite en la cantidad de nodos
!Caracteristicas: 
*1)Altura: cantidad de niveles
*2)Ancho: cantidad de ramas u hojas(ver bien)
*-Operaciones:
1 Enumerar elementos
2 Enumeracion de una seccion del arbol
3 Get
4 Inser
5 Delete
6 Pruning
7 Grafing


!DS/DATA STRUCTURE MAS COMUNES
*Las DS nos sirven para implementar las ADT, 

*1)ARRAY(DS)
*-Estructura de datos lineal, con datos del mismo tipo y 
*-Se almacenan en ubicaciones de memoria contiguas y adyacentes detro de la memot de la pc
*-Funcionan con un sist de indices que comienza en 0 hasta (n-1), donde n es el tamaño del arreglo
-Puede ser estatico o dinamico. 
  *Estatico: se determina el espacio de memor sin poder miodificarlo, ej 5 elem max. 
  *Dinamicos: uno define el tamaño y se puede extender


*2)LINKED LIST(DS)
*Una Linked List es una secuencia de nodos enlazados entre sí. Cada uno de ellos contiene información y una (o más) referencias a otros nodos. En otras palabras, cada nodo contiene valores y punteros:
!HEAD --> [DataItems|Next]---> [DataItems|Next] --> NULL

*-Estructura de datos lineal
*-Los datos se almacenan en forma de nodos
!-Los nodos tienen 2 partes:
  *1)Dato/Valor
  *2)Next/Puntero: apunta al sig nodo en la secuencia
*-Los datos enlazados pueden tener cualquier forma(cadenas, num, caracteres)
*-La LL en sí mantiene referencia solo al primer nodo de la lista o al ultimo 
*-Si la lista esta vacia, el valor de HEAD es NULL: 
  HEAD --> NULL

*MEMORIA:
Es como una matriz conformada por multiples espacios con memory slots(1byte = 8bits)  
Nosotros no elegimos donde se guarda, sino que es de forma aleatroria
Cada byte tiene una dir de memoria y alli es donde accede la pc
1)Los Array se guardan de forma continua(Js usa Dinamicos x default), es decir varios slots uno a lado del otro en memoria
Cuando creamos un array con cierta cantidad de elem, JS reserva en memoria esa cantidad duplicada. 
El problema es cuando agregamos uno mas. Ej tenemos espacio para 6, agregamos uno, Js debe buscar 2 slots (porq es el doble de 1) y ver en que lugar de la memoria puede hacerlo
2)LL: como los nodos apuntan directamente a otro nodo, le da mas flexibilidad a la memoria (dispersos x toda la memor). Ventaja: es mas facil modificar la lista. Desventaja: ocupa mas memoria 


!DS AVANZADAS

*1)HASH TABLE 
*Estructura mas clasica para implementar un diccionario
!Podemos pensarla como:
*-Un arreglo donde se guardan: los valores
*-Un indice donde se guardan: es el resultado de pasar el valor por una funcion hash: 
  *-Recibe key como param
  *-Devuelve el indice (codigo hash): alli se almacena el valor correspondiente
  Ej. key: sandra dee | hash function | 01 | buckets(cantidad de espacios de arrays): 521-9655


*2)BINARY TREE/ARBOL BINARIO
*-Mismas caract q para el TREE(ADT)
*-Cada nodo tiene como maximo dos nodos hijos (hjo izq o derehco)
!Partes:
*1 datos
*2 Puntero nodo hijo izq
*3 Puntero nodo hijo dere
!La mejor FORMA DE IMPLEMENTAR UN BT Es con la LL: UN PUNTERO PARA LOS NODOS HIJOS
?Que es una binary search?
*Usamos un algoritmo para encontrar un dato/info
Un modo de recorrer para encontrar un dato podria ser: 
*1)la busqieda binaria. Ej encontare el num 23 entre 10 elem:
- Nos situamos en la mitad del intervalo(se divide x dos) 
- Si el valor encontrado es menor , nos vamos hacia la derecha, sino hacia la izq
Asi sucesivamente vamos dividiendo por la mitad el intervalo de busqueda hasta que encontramos el numero  
Esto se aplica perfectamente para el arbol binario (cada vez q buscamos en los sub arboles, estamos "dividiendo" a la mitad la bsqueda)
!los valores del arbol binario no se repite

*TREE TRAVERSAL/Formas de recorrer un arbol(recorridos):
-recorrido por niveles
-recorrido por ramas























*/