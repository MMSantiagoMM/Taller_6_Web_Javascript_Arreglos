/* Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] mostrar en html en cual  posición se encuentran las frutas y en cual posición las verduras */

let frutasYversuras=['tomate','banano','manzana','pera','cebolla','papa','fresas','Ajo','Sandía']
let posicionFrutas = []
let posicionVerduras = []
posicionFrutas.push(frutasYversuras.indexOf('banano'))
posicionFrutas.push(frutasYversuras.indexOf('manzana'))
posicionFrutas.push(frutasYversuras.indexOf('pera'))
posicionFrutas.push(frutasYversuras.indexOf('fresas'))
posicionFrutas.push(frutasYversuras.indexOf('Sandía'))
posicionVerduras.push(frutasYversuras.indexOf('tomate'))
posicionVerduras.push(frutasYversuras.indexOf('cebolla'))
posicionVerduras.push(frutasYversuras.indexOf('papa'))
posicionVerduras.push(frutasYversuras.indexOf('Ajo'))
document.write('Posición de las frutas: '+posicionFrutas + '<br>')
document.write('Posición de las frutas: '+posicionVerduras + '<br>')
