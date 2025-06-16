/*
for(let i = 0; i < 10; i++){
    if(i % 2 !== 0) {
        console.log('El número', i, 'es impar papu') 
    }
}
*/
for (let i = 0; i < 10; i++){
    if(i % 2 === 0) {
        continue;
    }
    console.log('El número', i, 'es impar papu');
}