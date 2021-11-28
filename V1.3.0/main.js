alert("En este simulador, te mostraremos 3 perfumes, porfavor, seleccione el que quisiera comprar y en cuantas cuotas, para seleccionar, ingrese número 1, 2 o 3.");
/**
 * Descripción: La persona elije el perfume que quiere respecto a las opciones válidas.
 * @param { number } perfume: perfume que elige el cliente.
 */
let perfume = parseInt(prompt(`1) Cher Dieciocho 100 Ml = $3448
2) Carolina Herrera Good Girl EDP 80 ml = $13840
3) Narciso Rodriguez For Her Eau De Parfum 50ml = $16060
 `));

/**
 * Descripción: Al Switch se le pasa el perfume elegido y a la variable perfume1,2 o 3, depede de lo que haya elegido, se le asigná el precio de ese producto y a la variable precioPerfume se le asigna el valor de la variable anterior para poder usarla más adelante.
 * @param {number} precioPerfume: el precio del perfume que eliga el cliente en pesos argentinos.
 * @param {number} perfume1: precio del primer perfume, así con perfume2 y perfume3, igual.
 * 
 */

let precioPerfume = 0;
let perfume1, perfume2, perfume3 = 0;

switch (perfume) {
    case 1:
        perfume1 = 3448;
        precioPerfume = perfume1;
        break;
    case 2:
        perfume2 = 13840;
        precioPerfume = perfume2;
        break;
    case 3:
        perfume3 = 16060;
        precioPerfume = perfume3;
        break;
    default: alert ("opción no válida")
        break;
}



/**
 * Descripción: depende el precio del perfume que se le pase como parámetros, se calcula el costo de las cuotas.
 * @param {number} tresCuotas: Variable del precio del perfume dividido en 3.
 * @param {number} seisCuotas: Variable del precio del perfume dividido en 6.
 * @param {number} doceCuotas: Variable del precio del perfume dividido en 12.
 */

let tresCuotas;
let seisCuotas;
let doceCuotas;

const calculoCuotas = (precioPerfume) => {
    if (precioPerfume < 5000) {
        tresCuotas = parseFloat(precioPerfume / 3).toFixed(2);
    } else if (precioPerfume >= 5000 && precioPerfume < 15000) {
        tresCuotas = parseFloat(precioPerfume / 3).toFixed(2);
        
        seisCuotas = parseFloat(precioPerfume / 6).toFixed(2);
    } else if (precioPerfume >= 15000) {
        tresCuotas = parseFloat(precioPerfume / 3).toFixed(2);
        seisCuotas = parseFloat(precioPerfume / 6).toFixed(2);
        doceCuotas = parseFloat(precioPerfume / 12).toFixed(2);
    }
}


/**
 * Descripción: A esta función se le pasa la opción de cuotas que se haya elegido y a la variable número de cuotas se le asigna el número de cuotas y a cuotasFinales se le asigna el precio de esa cuota.
 * @param {number} numeroCuotas: la cantidad de cuotas que eligirá el cliente.
 * @param {number} cuotasFinales: precio de las cuotas que el cliente optó.
 */

let numeroCuotas = 0;
let cuotasFinales = 0;
const opcionCuotas = (opcion) => {
    switch (opcion) {
        case 1:
            numeroCuotas = 1;
            cuotasFinales = precioPerfume;
            break;
        case 3:
            numeroCuotas = 3;
            cuotasFinales = tresCuotas;
            break;
        case 6:
            numeroCuotas = 6;
            cuotasFinales = seisCuotas;

            break;
        case 12:
            numeroCuotas = 12;
            cuotasFinales = doceCuotas;

            break;
        default: alert ("Opción no válida")
            break;
    }
    return numeroCuotas, cuotasFinales;
}


/**
 * Descripción: Dependiendo de la opción del perfume elegido, se le presentará al cliente las opciones de cuotas disponibles para cada uno. Luego de elegidas, se le presenta el mensaje final con la información del número de producto, la cantidad de cuotas y del valor de cada una.
 * @param {number} opcion: la opcion que el cliente elige respecto a sus cuotas. 
 */

const cuotas = (perfume) => {
    let opcion=0;
    switch (perfume) {
        case 1:
            calculoCuotas(precioPerfume);
            alert("Elegiste el producto 1, procederemos a mostrarte las opciones de pago,");
            opcion = parseInt(prompt(` Ingresa el numero de cuotas que desea abonar
1 cuota: $${precioPerfume}
3 cuotas: $${tresCuotas}`));
            opcionCuotas(opcion);
            alert(`Usted a elegido el producto 1, en pagos de ${numeroCuotas} cuotas de $${cuotasFinales} cada una. ¡Muchas gracias!
 `);
            break;
        case 2:
            calculoCuotas(precioPerfume);
            alert("Elegiste el producto 2, procederemos a mostrarte las opciones de pago");
            opcion = parseInt(prompt(`Ingresa el numero de cuotas que desea abonar
   1 cuota: $${precioPerfume}
   3 cuotas: $${tresCuotas}
   6 coutas: $${seisCuotas}`));
            opcionCuotas(opcion);
            alert(`Usted a elegido el producto 2, en pagos de ${numeroCuotas} cuotas de $${cuotasFinales} cada una. ¡Muchas gracias!
    `);
            break;
        case 3:
            calculoCuotas(precioPerfume);
            alert("Elegiste el producto 3, procederemos a mostrarte las opciones de pago");
            opcion = parseInt(prompt(`Ingresa el numero de cuotas que desea abonar
1 cuota: $${precioPerfume}
3 cuotas: $${tresCuotas}
6 coutas: $${seisCuotas}
12 cuotas: $${doceCuotas}`));
            opcionCuotas(opcion);
            alert(`Usted a elegido el producto 3, en pagos de ${numeroCuotas} cuotas de $${cuotasFinales} cada una. ¡Muchas gracias!
 `);
            break;
        default:
            break;
    }
}

cuotas(perfume);