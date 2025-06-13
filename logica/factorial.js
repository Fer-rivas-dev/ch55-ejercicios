/*
Factorial
Escriba un programa que solicite un número entero n . 
Donde  1 <= nResuelva esto usando recursión.

1.pedirle al usuario un número entero mayor o igual a 1.
2.crear una función recursiva que calcule el factorial
3.mostrar el resultado
*/
//funcion recursiva para calcular factorial
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//pedir numero 
let entrada = prompt("Escribe un número entero mayor o igual a 1:");
let numero = parseInt(entrada);

//verificar que sea válido
if (numero >= 1) {
  let resultado = factorial(numero);
  alert(`El factorial de ${numero} es ${resultado}`);
} else {
  alert("Número inválido. Debe ser un entero mayor o igual a 1.");
}
