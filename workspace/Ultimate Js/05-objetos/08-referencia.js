/*
let a = {};
let b = a;

b.prop = 1;
console.log(a, b);
*/
/*
let a = 1;

function suma(n){
    n++;
}
suma(a);
console.log(a);
*/

let a = {prop : 1}
function suma(n){
    n.prop++;
}
suma(a);
console.log(a);
//los tipos de datos primitivos se copian cuando se pasa a otra variable
//los objetos se pasan por referencia, no se copian, objetos, array, funciones.
