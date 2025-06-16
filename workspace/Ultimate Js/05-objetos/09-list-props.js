const punto = {
    x: 1,
    y: 2,
    dibujar() {
        console.log('dibujando el punto bot');
    }
}
//delete punto.dibujar;
if('dibujar' in punto){
    punto.dibujar();
}
let keys = Object.keys(punto);
console.log(Object.keys(punto));
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}


for (let entry of Object.entries(punto)){
    console.log(entry);
}

for(let llave in punto){
    console.log(llave, punto[llave]);
}