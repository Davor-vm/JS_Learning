let pairs = [
    [1, { nombre : "Juan"}],
    [2, { nombre : "Sean"}],
    [3, { nombre: "Tilín"}]
]
let array = [
    {id : 1, nombre : "Juan"},
    {id : 2, nombre : "Sean"},
    {id : 3, nombre: "Tilín"}
]
function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx]; // Accede al objeto en el índice actual
        collection[idx] = elemento[1]; // Crea un objeto con el id y los demás atributos
        collection[idx].id = elemento[0]; // Asigna el id al objeto
    }
    return collection; // Retorna el array de objetos
}
let resultado = toCollection(pairs);
console.log(resultado); // Debería imprimir [{id: 1, nombre: "Juan"}, {id: 2, nombre: "Sean"}, {id: 3, nombre: "Tilín"}]