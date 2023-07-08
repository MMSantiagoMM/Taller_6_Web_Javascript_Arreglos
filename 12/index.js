/*     12.  arreglo 1: [3,5,9,10,35,42,12,22,25], arreglo 2: [9,5,33,12,7,20,22,3,8] de los anteriores arreglos mostrar en forma de (tabla de multiplicar) la suma de los elementos del arreglo 1 con los elementos del arreglo 2 también sumar el total de cada arreglo.
	resultado:
	3 + 9 = 12
	5 + 5 = 10
	9 + 33 = 42
	10 + 12 = 22
	35 + 7 = 42
	42 + 20 = 62
	12 + 22 = 34
	22 + 3 =  25
	25 + 8 = 33
	163 + 119 = 282 */


    let arreglo_1 = [3,5,9,10,35,42,12,22,25,163]
    let arreglo_2 = [9,5,33,12,7,20,22,3,8,119]
    let aux = "";
    let aux2 = 0;

    for(let i = 0; i < arreglo_1.length; i++){
        aux2 = arreglo_1[i] + arreglo_2[i];
        aux += `${arreglo_1[i]} + ${arreglo_2[i]} = ${aux2} <br>`
    }
    document.write(aux)