/*
Número más alto
Escribe un programa que pida 10 números. Utilizando operadores lógicos y 
cualquier otra función o estructura de JavaScript que hayas visto, determina 
y genera el mayor de esos números.

1.pedir 10 numeros al usuario
2.guardar el número más alto de todos los que se escriben.
3.comparar el número con el más alto guardado hasta ahora.
4.mostrar cuál fue el número más alto

*/
const numeroMasAlto = () => {
  let mayor = null;
  let contador = 1;

  while (contador <= 10) {
    let numero = prompt(`Escribe el número ${contador}:`);
    numero = parseFloat(numero); // Convertir a numero 

    if (mayor === null || numero > mayor) {
      mayor = numero;
    }

    contador++;
  }

  console.log(`El número más alto que escribiste fue: ${mayor}`);
};

numeroMasAlto();
