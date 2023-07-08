/* Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares. */

let numeros = [3, 5, 9, 10, 35, 42, 12, 22, 25];
let pares = []
let impares = []
let contadorPares = 0;
let contadorImpares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
        contadorPares++;
    } else {
        impares.push(numeros[i])
        contadorImpares++;
    }
}
document.write("numeros pares: " + pares + "<br>")
document.write("numeros impares: " + impares + "<br>")
document.write("Cantidad de numeros pares: " + contadorPares + "<br>")
document.write("Cantidad de numeros impares: " + contadorImpares + "<br>")