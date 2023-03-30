/*
*SORTING 
Ordenar o clasificar

?Que es un algoritmo
Secuencia de instrucciones logicas necesarias para resolver un problema
Ej. Hacer una tostada
Ej. laberinto: 1° buscar el camino mas corto con un numero que ocupa el espacio hasta que llega al traingulo(serian "los pasos que tenemos que hacer")

?Que hace un buen algoritmo
1 Repetible: siempre que se ejecute, que devuelva el mismo resultado
2 Claro: entender que es lo que hace
3 Eficaz: que cumpla la tarea encomendada

!A)ALGORITMOS DE BUSQUEDA 
1 De fuerza brura: buscar un elem sin una estrategia previa 
2 BinarySearch(Buscar por mitades)  

!B)ALGORITMOS DE ORDENAMIENTO
Se encargan de reagrupar todos los elem siguiendo un orden particular 
!Se dividen en dos grupos:
*1) CASOS DE ESTUDIO: 
*1-Bubble sort: 
*Busca ordenar una lista haciendo subir como una 'burbuja', los elem de mas peso hacia el final 
*Se basa en comparar pares de elementos. Ej. 548697310. Empieza a comparar y el n° mas alto va quedando al final de la lista
2-Insertion sort
3-Selection sort

*2) CASOS DE USO REAL
*1-Merge sort:
!Se divide en dos procesos:
*1)Primero divide el arreglo a la mitad, en 2, 4, 6, 8, asi sucesivam' hasta que solo queden elem individuales. Cada elem individual es un arreglo ordenado 
*2)"Mezcla" cada uno de los elem, pero en orden . Agarra el priemro de cada sub arreglo y lo va comparando y sumando al arreglo mas grande, pero siempre agarra el menor de esos elementos. Y asi sucesivamente hasta que sigue repitiendo hasta que quede el arreglo ordenado)
*Ejemplo:
6 5 3 1 8 7 2 4
56 13 78 24
1356 2478
12345678

2- Quick sort
3- Heap sort
4- Shell sort

!PERFORMANCE
?Como podemos medir el rendimiento de un algortimo?
*El estandar p la medicion es ver la cantid de pasos del peor escenario posible. Lo llamamos "big O notation"
-O(log n)
-O(n)
-O(n*2)(es un signo mayor mirando hacia abajo)
-O(n!)
























*/
