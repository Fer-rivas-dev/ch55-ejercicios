let counter = 0;
const username = prompt("¡Hola!, ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];
//vamos a pedir 5 peliculas primero
alert("A cotinuacion te vamos a pedir tus 5 peliculas favoritas");
for (let i = 1; i <= 5; i++) {
  //los strings dentro de `` se conocen como string literal,
  //concatenar variables y texto de una forma mas sencilla y legible
  favoriteMovies.push(prompt(`Ingresa la pelicula ${i}`));
  //equivalente a "Ingresa la pelicula numero " + i + ": "
}

console.log(`Hola soy ${username} tengo ${age} años y 
  mis peliculas favoritas son:
  `);


while (counter < favoriteMovies.length) {
  console.log(`Mi pelicula favorita numero ${counter + 1} es: ${favoriteMovies[counter]}`);
  counter++;
}