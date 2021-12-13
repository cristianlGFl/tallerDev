function* iterador() {
    console.log('Inicia Iterador')

    yield "Hola Clase...";
    yield "Iterador 01..";
    yield "Iterador 02";


    console.log('Termina Iterador')

}

let ite = iterador();

for (let y of ite) {
    console.log(y);
}