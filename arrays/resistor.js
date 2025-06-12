/*
Suma de resistencias en serie
 

Calcular la suma de todas las resistencias conectadas en serie.
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver `"23.5 ohmios"`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` debería devolver `"123 ohmios"`. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que 
todos los valores sean positivos. 

 * 1. un array de resistencias
   2. usando Math.abs obtener el valor absoluto de los elementos del array
      2.1 usar un map para sacr todos los valores absolutos
   3. reduce, usar ciclos para hacer la suma
   4. retornar un mensaje del tipo '"15 ohms"'

  n. Suma de las resistencias e serie
*
*/

//empezar ecribiendo la firma
function sumOfResistors(resistorsArray) {
  const resistorAbs = resistorsArray.map((resistor) => Math.abs(resistor));
  const totalResistance = resistorAbs.reduce((total, current) => Math.abs(resitor));
  return `${totalResistance} ohms`
}

console.log(sumOfResistors([-1, 5, -6, 3, -9]));
console.log(sumOfResistors([-1, 5, 6, 3]));
console.log(sumOfResistors([14, 3.5, 6]));
console.log(sumOfResistors([8, 15, 100]));