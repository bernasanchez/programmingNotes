/*
DOBLE IGUAL O TRIPLE IGUAL 

TRIPLE IGUAL ===  o Igualdad estricta 

Dos valores tienen que ser iguales en tipo y valor.
Ej. 2 === 2 / '2' === 2 no es igual xq es un string vs number

Cuando comparamos objetos(obj, array, func), es distinto: 
Por mas que los objetos tengan las mismas prop y valores, siempre van a ser distintos, ya que en realidad lo que estamos "comparando" son sus REFERENCIAS. El espacio de memoria donde se almacenan esos obj en cada variable, siempre va a ser distinto

El triple igual suele llamarse OPERADOR DE INDENTIDAD: 
Cuando lo usamos para comparar objetos, este nos dice si estamos hablando del mismo espacio de memoria, del mismo objeto en la memoria

Como sabemos si dos objet que estan en posiciones distintas de memoria son iguales?
1) pasando los objetos a string con JSON.stringify(nombreVariable): el problema que si las prop estan en dintinto orden va a devolver false
2) Usando una libreria LODASH: funcion isEqual que compara objetos de forma recursiva por todos los objetos

Como funciona el operador de diferencia? !==
Es exactamente igual pero con la diferencia
















*/