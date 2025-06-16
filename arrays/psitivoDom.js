/*
Dominio positivo en Array
Escriba una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `false` .

1.contar los números positivos 
2.los demás  se cuenta como no positivos
3.los positivos son mayoría, devuelve true
4.si no, devuelve false.
*/

function positiveDom(arr) {
  let positivos = 0;
  let noPositivos = 0;

  for (let num of arr) {
    if (num > 0) {
      positivos++;
    } else {
      noPositivos++;
    }
  }

  return positivos > noPositivos;
}

// Ejemplos:
console.log(positiveDom([-1, -3, -5, 4, 6767])); // false
console.log(positiveDom([1, 2, -1, 3, 0]));      // true
