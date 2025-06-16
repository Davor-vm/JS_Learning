/* Crear algoritmo que devuelva número menor y mayor de un array
*/
let array = [2, 5, 7, 15, -5, -17, 55];
/*
function getMinMax(arr) {
    if (arr.length === 0) {
        return null; // Retorna null si el array está vacío
    }
    
    let min = arr[0];
    let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else
        if (arr[i] > max) {
            max = arr[i];
        }
    }
        return [min, max]; // Retorna un array con el menor y mayor número
}
*/
function getMinMax(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor]; // Retorna un array con el menor y mayor número
}
let numeros = getMinMax(array);
console.log(numeros); // Debería imprimir [-100, 55]