function CantidadDePares(inicio, fin) {
    let cantidad = 0
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            cantidad += 1
        }
    }
    return cantidad
}

console.log(CantidadDePares(50, 100))