// cuales son los números pares
let i = 2;
/*
while (i < 2) {
    if(i % 2 === 0) {
        console.log("El número ", i, " es par");
    }
    i++;
}
*/
console.log("Fuera del while");

do {
    if(i % 2 === 0) {
        console.log("El número ", i, " es par");
    }
    i++;
} while (i < 2);
