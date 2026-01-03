// Buscar elementos del HTML en JS

// document.getElementById("id")
// buena practica, es guardar la busqueda en una variable
const tituloPrincipal = document.getElementById("titulo-principal");

console.log(tituloPrincipal);
// textContent: Es la propiedad que nos permite modificar el texto
tituloPrincipal.textContent = "Codigo G28";
// modificar estilos
// JS tiene la capacidad de modificar estilos, pero NO es recomendable
// usarlo porque para cambiar los estilos una mucho procesamiento
// tituloPrincipal.style.color = "#f01";
// si quisieramos modificar un estilo, lo recomendable es crear en CSS
// una clase y agregarle esa clase desde JS

// classList.add: sirve para agregar una clase a una etiqueta
// classList.remove: sirve para eliminar una clase a una etiqueta
tituloPrincipal.classList.add("css-titulo-principal");

// document.querySelector: busca 1 element
// document.querySelectorAll: busca todas las coincidencias

// nombre de etiqueta
const parrafo = document.querySelector("p");
const parrafos = document.querySelectorAll("p");
console.log(parrafo);
console.log(parrafos);

const btnOne = document.querySelector(".btn-one");
console.log(btnOne);

// como podemos capturar el click de un boton y hacer una acción
// la función no tiene nombre
/**
 * addEventListener
 * parametro1: evento "click"
 * parametro2: function (la funcion no tiene nombre - funcion anonima)
 */
btnOne.addEventListener("click", function(){
    const segundoParrafo = document.querySelector("#segundo-parrafo");
    segundoParrafo.textContent = "Se modifica el segundo parrafo";
})

// DATOS EXTRA MUY IMPORTANTE
// Todos los elementos tienen el evento click, ya sea un parrafo u otro elemento

const contenedor  = document.querySelector("#contenedor");

contenedor.innerHTML = `
<h2>Titulo de JS</h2>
<img width="200" src="https://skillforge.com/wp-content/uploads/2020/10/javascript-768x866.png" />
<div>
    <p>Hola mundo</p>
</div>
`