/* Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22] mostrar en html los elementos ordenados aleatoriamente. */

let numeros = [2,4,6,8,10,12,14,16,18,20,22]

numeros.sort(()=>Math.random() - 0.5)

console.log(numeros)