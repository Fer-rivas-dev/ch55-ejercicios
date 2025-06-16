/*
Estado en línea
 Mostrar el estado en línea de una lista de usuarios.
 Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` 
debería devolver `'mockIng99, J0eyPunch y 1 más en línea'`

1.contar cuántos usuarios hay en linea
2.según la cantidad:
 2.1 si hay 0 → muestra "Nadie en línea".
 2.2 si hay 1 → muestra "usuario en línea".
 2.3 si hay 2 → muestra "usuario1 y usuario2 en línea".
 2.4 si hay 3 o más → muestra "usuario1, usuario2 y X más en línea".

*/

function onlineStatus(usuarios) {
  const total = usuarios.length;

  if (total === 0) {
    return "Nadie en línea";
  } else if (total === 1) {
    return `${usuarios[0]} en línea`;
  } else if (total === 2) {
    return `${usuarios[0]} y ${usuarios[1]} en línea`;
  } else {
    return `${usuarios[0]}, ${usuarios[1]} y ${total - 2} más en línea`;
  }
}

// Ejemplo:
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
// Salida: "mockIng99, J0eyPunch y 1 más en línea"
