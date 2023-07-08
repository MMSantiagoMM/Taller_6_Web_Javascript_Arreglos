/* Realiza 1 ejercicio explicando cómo funcionan los métodos push(), pop(), slice() y splice() */

let numeros = ["uno", "dos", "tres", "cuatro", "cinco"]
let otrosNuymero = numeros.slice(0, 3);
numeros.splice(3,0, "tres.uno", "tres.dos")
console.log(numeros);