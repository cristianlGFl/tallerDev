const usuarios = require("./user");
const validador = require("./validation");

const users = usuarios.getUser();
console.log(users)

users.forEach((user) => {
    console.log(`El usuario ${user.name} ${user.surname} es ${validador.isValidUser(user)? "Valido": "Invalido"}`)

})