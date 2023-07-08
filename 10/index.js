/* Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma ascendente. */

let arregloDesordenado = [29,5,40,10,35,42,12,22,25,1,3]

arregloDesordenado.sort((a,b)=>  b - a)
console.log(arregloDesordenado)
