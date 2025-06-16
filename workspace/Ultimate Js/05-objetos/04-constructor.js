// Por convención, un constructor se escribe con UpperCamelCase, 
// y se usa para crear instancias de objetos.
// {id: 1, recuperarClave: function () {}}
function Usuario (){
    this.id = 1, 
    this.recuperaClave = function () { // métodos
        console.log('Recuperando clave de usuario...');
    }
}
//un método es una función que pertenece a un objeto
let usuario = new Usuario();
//se crea un objeto literal del aire
//se vincula el prototipo de la funcion al objeto literal
//se le asigna a this el objeto que acabamos de crear
//Si la función de usuario no retorna nada, retorna de forma automática this
console.log(usuario);
