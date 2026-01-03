// Obtención de la edad del usuario
const edad = Number(prompt("Ingresar edad"))

if (isNaN(edad)) {
    console.error("Se debe ingresar un número.")
} else if (edad <= 0) {
    console.error("El número debe ser mayor a 0.")
} else if (edad < 18) {
    console.warn("Usted es menor de edad.")
} else {
    console.log("Usted es mayor de dad")
}