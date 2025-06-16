/*
 Indice validar que no sea menor a cero y que el elemento exista en el
 array
*/
function getbyIDx(arr, idx){
    if (idx < 0 || idx >= arr.length) {
       return("Índice fuera de rango");
    }
    return arr[idx];
    
}
let resultado = getbyIDx([1, 2], 0);
console.log(resultado); // Debería imprimir 2