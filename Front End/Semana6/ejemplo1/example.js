// variable del usuario
// Number sirve para que solo sean números
// prompt siempre devuelve un string
const numero = Number(prompt("Ingresar un número"))

const residuo = numero % 2

if (residuo === 0) {
    console.log("El número", numero, "es par")
} else {
    console.log("El número", numero, "es impar")
}