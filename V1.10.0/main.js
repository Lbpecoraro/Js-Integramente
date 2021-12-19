/**
 * Descripción: Se realizó una clase para poder crear planes que contentan nombre, descripción y precio.
 */
class Planes {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
/**
 * Descripción: Se crearon 3 planes.
 */
const plan1 = new Planes("Consulta Puntual", "Sesión única de 45 minutos aprox. con el profesional que más le convenga (según su disponibilidad)", 700);
const plan2 = new Planes("Consulta Bimestral", "Dos sesiones por mes de 45 minutos aprox. cada una con el profesional que más le convenga (según su disponibilidad)", 1200);
const plan3 = new Planes("Consulta Semanal", "Una sesión semanal por un mes de 45 minutos aprox. cada una con el profesional que más le convenga (según su disponibilidad)", 2000);
/**
 * Descripción: Se creó un array vacio para almacenar los planes creados anteriormente.
 * @param {array}planes: array donde se almacenan los planes.
 */
let planes = [];
planes.push(plan1);
planes.push(plan2);
planes.push(plan3);
/**
 * Descripción: Guardamos en el localStorage el array de planes como JSON.
 */
localStorage.setItem('1', JSON.stringify(planes));
/**
 * Descripción: Se capturó en una variable el form.
 */
let formulario = document.getElementById("formulario");
/**
 * Descripción: Se capturó en una variable el array del localStorage y se lo parseó.
 */

// ==================================================================================================================
// A partir de acá es donde se cumplen los requisitos del desafio complementario, ya que obtenemos del localStorage un array de objetos, lo parseamos para poder trabajar sobre él, y luego se utiliza para poder mostrar por pantalla cada uno de los planes que estan dentro del array.

// ==================================================================================================================
let planesLocal = JSON.parse(localStorage.getItem("1"));
/**
 * Descripción: Creación de una función donde dependiendo si se compra o no el plan mostrado, aparecerá o no un cartel de comprado.
 * @param {string}seCompro: Se define si se compró o no el plan.
 * @param {HTMLelement}infoForm: Se guarda el div donde se van a mostrar los planes.
 */
let seCompro = "NO";
let mostrarPlan = (indice, comprado) => {
    let infoForm = document.getElementById("infoForm");
    seCompro = comprado;
    if (seCompro === "NO") {
        infoForm.innerHTML = (`
        <div class="elPlan"> 
        <h2>${planesLocal[indice].nombre}</h2>
        <p>${planesLocal[indice].descripcion}</p>
        <span>$${planesLocal[indice].precio}</span>
        </div>
        `)
    } else if (seCompro === "SI") {

        infoForm.innerHTML = (`
        <div class="elPlan"> 
        <h1 style=color:green> COMPRADO!!! </h1>
        <h2>${planesLocal[indice].nombre}</h2>
        <p>${planesLocal[indice].descripcion}</p>
        <span>$${planesLocal[indice].precio}</span>
        </div>
        `)
    }
};
/**
 * @param {HTMLElement} cuerpo: Se captura el main del HTML.
 */
let cuerpo = document.getElementById("cuerpo");
/**
 * Descripción: se crea un evento donde le pedimos al usuario que ingrese que plan elegir y se muestra por pantalla cual es el plan.
 * @param {number} cont: variable que funciona como contador para poder usarla como índice para mostrar los planes.
 * @param {string} eleccion: se guarda en esta variable el valor de lo que el usuario ingresó en el input.
 */
let cont = 0;
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let eleccion = document.getElementById("eleccion").value.toUpperCase();

    if (eleccion === "P") {
        cont = 0;
        mostrarPlan(cont, "NO");
    } else if (eleccion === "B") {
        cont = 1;
        console.log(cont);
        mostrarPlan(cont, "NO");
    } else if (eleccion === "S") {
        cont = 2;
        mostrarPlan(cont, "NO");
    }
})
/**
 * Descripción: se crea un evento donde si el usuario hace click en comprar se le muestra por pantalla que compró ese plan.
 * @param {HTMLElement} comprar: variable donde guardamos el input de comprar.
 */
cuerpo.addEventListener("click", () => {
    let comprar = document.getElementById("comprar");
    comprar.addEventListener("click", () => {
        mostrarPlan(cont, "SI");
    })
})