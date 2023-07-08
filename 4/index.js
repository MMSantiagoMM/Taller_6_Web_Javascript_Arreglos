/* Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo. */

let frutas = ['manzana','naranja','pera','kiwi','banano','granadilla']

frutas.forEach((item,index) =>{
    let aux = " "
    aux += item;
    document.write(aux)
})