// short - circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = '';
let username = nombre || 'chanchito feliz';
console.log(username); // 'Invitado'

function fn1() {
  console.log('soy funcion 1');
    return false;
}
function fn2() {
  console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2(); // si fn1 es true, se ejecuta fn2