/*
Alarma
Escriba un programa que pregunte al usuario la cantidad de segundos
 necesarios hasta que se ejecute una alarma (mensaje) junto con un 
 texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
Ejemplo de resultado : "Hora de dormir después de 10 segundos"

1. cuantos segundos esperar.
2. un mensaje para mostrar.
3. mostrar el mensaje como una alarma

*/

const alarma = () => {
  //pedir segundos
  let segundos = prompt("¿Cuántos segundos quieres esperar?");
  segundos = parseInt(segundos); // Convertir a numero entero

  //pedir mensaje para la alarma
  let mensaje = prompt("¿Qué mensaje quieres mostrar cuando suene la alarma?");

  //esperar los segundos y mostrar el mensaje
  setTimeout(() => {
    alert(`${mensaje} después de ${segundos} segundos`);
  }, segundos * 1000); // convertir a milisegundos
};

//ejecutar la función
alarma();
