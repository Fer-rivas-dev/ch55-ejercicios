/*
Número dividido en mitades
 Dado un número, devuelve el número dividido en sus mitades en una matriz.
 Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` .

1.Dividir el numero en 2
2.guardar en una variable
3.devolver el resultado
*/
function numDiv(numero) {
  let mitad = numero / 2;
  return [mitad, mitad];
}

// Ejemplos:
console.log(numDiv(4));   // [2, 2]
console.log(numDiv(10));  // [5, 5]
