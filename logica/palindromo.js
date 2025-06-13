/*
Palíndromo
Escriba un programa que solicite una palabra u oración
 (puede estar en mayúsculas, tener espacios y signos de puntuación).
  Determine si la oración o palabra es un palíndromo. Ignore la 
  puntuación, los espacios y las mayúsculas.

1.pedir que escriba una palabra u oracion
2.cambia todas las letras a minúsculas para que no importe si están en mayúscula o minúscula.
3.uita todos los espacios, signos de puntuación y caracteres que no sean letras o números.
4.Invertir el orden de las letras de la palabra 
5.compara la palabra o original con la palabra o frase invertida.
6.si son iguales, significa que es un palíndromo.
7.mostrar el resultado al usuario.
 */
const verificarPalindromo = () => {
  let texto = prompt("Escribe una palabra o frase:");

  //convertir todo a minúsculas
  texto = texto.toLowerCase();

  //eliminar espacios y signos de puntuacion
  texto = texto.replace(/[^a-z0-9]/g, "");

  //invertir el texto
  let textoInvertido = texto.split("").reverse().join("");

  //comparar original con invertido
  if (texto === textoInvertido) {
    alert("¡Sí! Es un palíndromo.");
  } else {
    alert("No, no es un palíndromo.");
  }
};

//ejecutar funcion
verificarPalindromo();
