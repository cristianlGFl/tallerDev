function cuadrado(valor) {
    setTimeout(() => {
        console.log({ valor, resultado: valor * valor })

    }, Math.random() * 500);
}

function* generador() {
    console.log('Inicia Iterador')

    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    yield cuadrado(6);

    console.log('Termina Iterador')

}

for (let y of generador()) {
    console.log(y);

}