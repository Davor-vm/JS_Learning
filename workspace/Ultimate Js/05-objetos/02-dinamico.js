const user = {
    id: 1,
};
//no dejamos cambiarle el valor, pero si lo volvemos un objeto, podemos modificar sus propiedades
user.name = 'Nicolás'; // Modificar una propiedad existente
user.guardar= function () {
    console.log('Guardando', user.name);
}
user.guardar(); // Llamar al método para guardar el usuario
//podemos agregar y quitar propiedades a un objeto en cualquier momento
// a una constante

delete user.name;
delete user.guardar; // Eliminar una propiedad o método del objeto
console.log(user); // Mostrar el objeto actualizado

const user1 = Object.freeze({id: 1}); // Congelar el objeto para evitar modificaciones
user1.id = 2; // Esto no tendrá efecto, ya que el objeto está congelado
user1.name = 'Nicolás'; // Esto tampoco tendrá efecto
console.log(user1); // Mostrar el objeto congelado

const user1 = Object.seal({id: 1});
// Sellar el objeto para evitar la adición o eliminación de propiedades, pero permitir modificaciones
user1.id = 2; // Esto tendrá efecto, ya que el objeto está sellado