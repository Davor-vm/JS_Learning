let user = {
    id: 1,
    email:'nico@holamundo.io',
    name: 'Nicolas',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave de usuario...');
    },// Función anónima
    
}
let user2 = {
    id: 2,
    email:'davor@holamundo.io',
    name: 'Davor',
    activo: false,
    recuperarClave: function () {
        console.log('Recuperando clave de usuario...');
    },// Función anónima
    
}
function crearUsuario(name, email) {
    return{
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave de usuario...');
        },// Función anónima
        
    }
}
let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user3 = crearUsuario('felipe' , 'felipe@holamundo.io');

console.log(user1);
console.log(user3);
