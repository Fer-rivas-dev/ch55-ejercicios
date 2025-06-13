/*
Sociedad secreta
 

Encuentra el nombre de una sociedad secreta basándose en la primera letra del nombre de cada miembro.
 

Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
1. Recibimos un array que tiene nombres,
   1.1 estos nombres empiezan en mayusculas
   1.2 ordenar el array en orden alfabetico
2. inicializar una variable para guardad las iniciales
3. utilizar un ciclo para recorrer el array
4. obtener la primer letra de cada nombre utilizando la notacion de corchete
5. pear la inicial de cada nombre para 
 Retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre
*/

//firma de la funcion
const secretName = function (namesArray) {
  let societyName = "";
  const sortedNames = namesArray.toSorted();
  sortedNames.forEach((name) => societyName = societyName + name[0]);
  return societyName;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));



