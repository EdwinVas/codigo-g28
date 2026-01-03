const edad = Number(prompt("Digite su edad"))

if (edad >= 0 && edad < 7) {
    console.log("Solo películas Infantiles (G)")
} else if (edad >= 7 && edad <= 12) {
    console.log("Puedes ver películas para Todo Público (PG)")
} else if (edad >= 13 && edad <= 15) {
    console.log("Puedes ver películas para Adolescentes (PG-13)")
} else if (edad >= 16 && edad <= 17) {
    console.log("Puedes ver películas para Mayores con restricción (R con adulto)")
} else if (edad >= 18) {
    console.log("Puedes ver Todo tipo de películas (Sin restricción)")
} else {
    console.error("El dato ingresado no es valido.")
}
