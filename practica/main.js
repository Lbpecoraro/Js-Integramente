// practica 1

// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = 39;
// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// Practica 2

// const primerCiudad = "Mendoza";
// const segundaCiudad = "San Luis";
// const tercerCiudad = "San Juan";
// const cuartaCiudad = "Buenos Aires";
// const quintaCiudad = "Misiones";
// console.log(primerCiudad);
// console.log(segundaCiudad);
// console.log(tercerCiudad);
// console.log(cuartaCiudad);
// console.log(quintaCiudad);

// Practica 3

// let nombre = "Matias Aguilera";
// let direccion = "San Martin 2895";
// let pais = "Argentina";
// let carnet = `
// Nombre: ${nombre}
// Dirección: ${direccion}
// Pais: ${pais}`
// console.log(carnet);

// practica 4

// let nombre1 = prompt("ESCRIBE UN NOMBRE");
// let nombre2 = prompt("ESCRIBE OTRO NOMBRE");
// let nombre3 = prompt("ESCRIBE OTRO NOMBRE");
// let nombre4 = prompt("ESCRIBE OTRO NOMBRE");
// let nombre5 = prompt("ESCRIBE UNO MÁS");

// let familia = `
// ${nombre1}
// ${nombre2}
// ${nombre3}
// ${nombre4}
// ${nombre5}
// `;
// console.log(familia);

// practica 5

// let precio = parseInt(prompt("Ingresa el precio al que compras la falopa"))
// let descuento20 = precio * 0.2;
// let precioFinal = precio - descuento20;
// console.log(precio);
// console.log(descuento20);
// console.log(precioFinal);

// Practica6

// let nombreIngresado = prompt("Ingresa un nombre");
// let nombreBuscado = "Lucia"
// if (nombreIngresado == nombreBuscado) {
//     console.log("Yo fui");
// } else {
//     console.log("Yo no fui");
// }

// Practica7

// let letraIngresada = prompt("Ingresa una letra");
// if ((letraIngresada == "y") || (letraIngresada == "Y")) {
//     alert("Correcto")
// } else {
//     alert("Error")
// };

// Practica8

// let personajeElegido = parseInt(prompt("Porfavor, ingresa un número del 1 al 4"));
// switch (personajeElegido) {
//     case 1:
//         alert("Tu personaje es Homero")
//         break;
//     case 2:
//         alert("Tu personaje es Marge")
//         break;

//     case 3:
//         alert("Tu personaje es Bart")
//         break;

//     case 4:
//         alert("Tu personaje es Lisa")
//         break;

//     default:
//         alert("Aún no existe este personaje")
//         break;
// };

// Practica9

// let sueldo = parseInt(prompt("Ingresa tu salario sin el signo $"))
// if (sueldo >= 0 && sueldo <= 1000) {
//     alert("sobrevives de pedo")
// } else if (sueldo >= 1001 && sueldo <= 3000) {
//     alert("Te das algunos gustos")
// } else if (sueldo > 3000) {
//     alert("¿quieres ser mi sugar?")
// };

// practica10

// let producto1 = prompt("Ingresa un producto de supermercado");
// let producto2 = prompt("Ingresa un segundo producto de supermercado");
// let producto3 = prompt("Ingresa un tercer producto de supermercado");
// let producto4 = prompt("Ingresa un último producto de supermercado");

// if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
//     alert(`
//     ${producto1}
//     ${producto2}
//     ${producto3}
//     ${producto4}`)
// } else {
//     alert("Error: es necesario cargar todos los productos")
// };

// Practica11

// let frase = prompt("Ingresa una frase cualquiera");
// let vueltas = parseInt(prompt("Ingresa un número entero"));

// for (let i = 1; i <= vueltas; i++) {
//     console.log(`${i}) ${frase}`);
// }

// Practica12

// let numero = parseInt(prompt("Ingresa un número"));

// for (let i = 1; i <= numero; i++) {
//     if (i > 4) {
//         break;
//     }
//     console.log(`lado ${i}`);

// };

// Practica13

// let contador = 1;
// let alumnos = '';
// while (contador <= 10) {
//     let alumnoIngresado = prompt("Ingresa el nombre de un alumno");
//     alumnos += ` ${alumnoIngresado}`;
//     contador++;
// }
// alert(alumnos);

// Practica14

// let nombre = prompt("Ingresa un nombre");
// let nombres = '';
// while (nombre != "VOLDEMORT") {
//     nombres += ` ${nombre}`
//     nombre = prompt("Ingresa un nombre");
// }
// alert(nombres);

// Practica15

// let entrada = prompt("Ingresa un número del 1 al 4, cuando te canses, ingresa ESC")
// let carrito = '';
// while (entrada != "ESC") {
//     switch (parseInt(entrada)) {
//         case 1:
//             carrito += "tomate ";
//             break;
//         case 2:
//             carrito += "papa ";
//             break;
//         case 3:
//             carrito += "carne ";
//             break;
//         case 4:
//             carrito += "pollo ";
//             break;
//         default:
//             break;
//     }
//     entrada = prompt("Ingresa un número del 1 al 4, cuando te canses, ingresa ESC")


// }

// alert(carrito)

// practica 16

// function entrada() {
//     let nombre = prompt("Ingresa tu nombre")
//     procesamiento(nombre);
// }
// entrada();

// function procesamiento(nombre) {
//     let mayus = nombre.toUpperCase();
//     salida(mayus)
// }

// function salida(salida) {
//     alert(salida);
// }

// practica 17

// function redondear(numero) {
//     return Math.round(numero)
// }
// for (let i = 0; i < 5; i++) {
//     let decimal = prompt("ingresa un número con decimal");
//     let resultado = redondear(decimal);
//     console.log(resultado);
// }


function impuesto(precio, procentaje) {

}