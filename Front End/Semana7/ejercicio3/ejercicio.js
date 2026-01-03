function filtrarMayores(numeros, minimos) {
    const array = []
    for (let numero of numeros) {
        if (numero >= minimos) {
            array.push(numero)
        }
    }
    console.log(array)
    console.log(array.length)
}

filtrarMayores([10,  20, 30, 35, 40], 30)