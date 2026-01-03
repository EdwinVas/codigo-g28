const nota = Number(prompt("Ingresar su nota"))

if (nota >= 90 && nota <= 100) {
    console.log("Excelente")
} else if (nota >= 80 && nota <= 89) {
    console.log("Muy bueno")
} else if (nota >= 70 && nota <= 79) {
    console.log("Bueno")
} else if (nota >= 60 && nota <= 69) {
    console.log("Aprobado")
} else if (nota >= 0 && nota <= 59) {
    console.log("Reprobado")
} else {
    console.error("El dato ingresado no es valido.")
}
