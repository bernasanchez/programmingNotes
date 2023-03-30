/*
*DOM 
*Arbol de objetos que genera el navegador al cargar un html
*Cada objeto es un nodo del arbol

*NODO
*Representacion de c/ etiqueta html dentro del arbol

*ESTRUCTURA DEL DOM
El DOM tiene NODOS.
Este arbol muestra distintas relaicones qye los nodos tienen entre si. Por ej. elemento padre e hijo, o solo padres 
La relacion es 1 PADRE Y 0 a N HIJOS

*COMPOSICION DE UN NODO
!Cada nodo del DOM contiene todos los atributos que podes darle a un ta html y mas
*ATRIBUTOS:
1 ID 
2 CLASES
3 CONTENIDO
4 PADRE
5 HIJOS

*RECORRIENDO EL DOM 
?Como los capturamos?
*Debemos hacer una query al DOM(una peticion):

*1)querySelectorAll: devuelve el NOdeList estatica, que representa una lista de elementos del doc que counciden con el grupo de selectores indicados.
Puede recibir diferentes selecctores: class, tagname, id, tag-class


*DEMO(video donde muestra el funcionamiento)
-Aqui guardamos en una const: los div que estan presentes en todo el documento 
-Dentro del argumento puede recibir cualquier tipo de selector (ej. clases, id, etc)
!const divs = document.querySelectorAll('div)

!EL NodeList FUNCIONA COMO UN ARRAY























*/