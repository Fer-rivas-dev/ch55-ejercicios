/*
Matriz de múltiplos
 Crea una función que toma dos parámetros (número, longitud) y devuelve
una matriz de longitud que contenga múltiplos del número.

 Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]`

1.Crea un arreglo 
2.contar la cantidad desde 1
3.multiplicar el número 
4.guardarlo en el arreglo
5.devolver el arreglo completo.

*/

function arrayMultiplos(numero, longitud) {
  let resultado = [];

  for (let i = 1; i <= longitud; i++) {
    resultado.push(numero * i);
  }

  return resultado;
}

// Ejemplos:
console.log(arrayMultiplos(2, 10));  // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6));  // [17, 34, 51, 68, 85, 102]
