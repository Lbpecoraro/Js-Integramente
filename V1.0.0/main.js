/**
 * @challenge: Crear un algoritmo JS simple
 * 
 * @version: v1.0.0
 * @author: Lucia Pecoraro
 * @fecha: 20/11/2021
 *
 * History:

 */

alert("Hola, procederemos a pedirte información personal, no te preocupes, esta no se mostrará de manera pública a menos que sea requerido para aprobar en coder, gracias")
let nombre= prompt("Ingrese su hermoso nombre que eligieron sus papás.");
let apellido= prompt ("Ingrese su apellido aunque no puede ser tan hermoso por que eso no se elije que yo sepa.");
alert(`Hola ${nombre} ${apellido}, solo nos falta una ultima información que pedirte`);
let anoDeNacimiento= prompt("Ingresa el año en que naciste");
let anoDeNacimientoParseado= parseInt(anoDeNacimiento);
let anoActual= 2021;
let edad= anoActual - anoDeNacimientoParseado;
alert(`Info personal obtenida:
Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad}
`)
