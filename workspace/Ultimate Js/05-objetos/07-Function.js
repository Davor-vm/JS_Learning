function Punto (x, y) {
    this.x = x; // Propiedad x del punto
    this.y = y; // Propiedad y del punto
    this.dibujar = function () {
        console.log('dibujando el punto bot')
    };
}
let punto = {z: 7};
//Punto.call(punto, 1, 2);
Punto.apply(punto, [3, 4]);
//te permite llamar funciones y agregar elementos con la propiedad
// de this,

console.log(punto);
/*
const Point = new Function('x', 'y', `this.x = x; // Propiedad x del punto
this.y = y; // Propiedad y del punto
this.dibujar = function () {
    console.log('dibujando el punto bot')
};`);

const p = new Point(1,2);
console.log(p); 
// Mostrar el objeto punto creado con la función Point
*/

//Las funciones pueden ser creadas con el Function
// EL método Applu y el méotodo Call son dos formas de invocar 
//funciones con un contexto específico. y agregarle argumentos.