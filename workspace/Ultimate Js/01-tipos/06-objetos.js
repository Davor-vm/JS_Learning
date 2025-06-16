// personaje de tv
let nombre = "tanjiro";
let anime = "Demon slayer";
let edad = 21;

let personaje = {
    nombre: "tanjiro",
    anime: "Demon slayer",
    edad: 21,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 17;
personaje['edad'] = 18;


let llave = 'edad';
personaje[llave] = 19;

delete personaje.anime;

console.log(personaje);