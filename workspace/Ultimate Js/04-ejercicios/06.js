/*Crear un algoritmo que devuelva cantidad de 
números positivos de un array.
*/
let array = [2, 5, 7, 15, -5, -17, 55];

function cuantosPositivos (arr){
    let numPositivos = 0;
    for (numero of arr){
        numPositivos = numero > 0 ? numPositivos + 1 : numPositivos;
    }
    return numPositivos; // Retorna la cantidad de números positivos
}
function cuantosPositivos2 (arr){
    let numPositivos = 0;
    for (numero of arr){
        if ( numero > 0 ){
            numPositivos++;
        }
    }
    return numPositivos; // Retorna la cantidad de números positivos
}


let resultado = cuantosPositivos2(array);
console.log(resultado); // Debería imprimir 5