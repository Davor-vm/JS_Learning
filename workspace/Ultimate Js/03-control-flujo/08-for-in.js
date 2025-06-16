let user = {
    id: 1,
    name: 'John',
    age: 25,
};

for (let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'conejo', 'loro'];

for (let indice in animales){
    console.log(indice, animales[indice]);
}