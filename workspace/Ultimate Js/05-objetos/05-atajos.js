let obj = {};

let obj2 = new Object();

//New Array(); []
// New string(); ""
// New Number(); 123
// New Boolean(); true false

function Usuario() {
    this.name = 'Nicolas';
}
let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s2.valueOf());