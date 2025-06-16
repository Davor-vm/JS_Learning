/*
    Crear algoritmo que tome un array de objetos
    y devuelva un array de pares
*/
let array = [
    {id : 1,
    nombre : "Juan"},
    {id : 2,
    nombre : "Sean"},
    {id : 3,
    nombre: "Tilín"}
];
let pares = [
    [1, {id : 1, nombre : "Juan"}],
    [2, {id : 2, nombre : "Sean"}],
    [3, {id : 3, nombre: "Tilín"}]
];
function toPairs(arr) {
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx]; // Accede al objeto en el índice actual
        pairs[idx] = [elemento.id, elemento]// Crea un par con el id y el objeto
    }
    return pairs; // Retorna el array de pares
}
let resultado = toPairs(array);
console.log(resultado); // Debería imprimir [[1, {id : 1, nombre : "Juan"}], [2, {id : 2, nombre : "Sean"}], [3, {id : 3, nombre: "Tilín"}]]