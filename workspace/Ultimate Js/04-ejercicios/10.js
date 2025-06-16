/*
    Crear array de longitud N, y que sus elementos sean 
    números de 1 hasta N
*/
let longitud = 7;
function crearArray(n){
    if (n <= 0){
        return []; // Retorna un array vacío si n es menor o igual a 0
    }
    let arreglo = [];
    for (let i = 0; i < n; i++) {
        arreglo[i] = i + 1; // Asigna el valor i al índice i-1
    }
    return arreglo; // Retorna el array creado
}
let resultado = crearArray(longitud);
console.log(resultado);