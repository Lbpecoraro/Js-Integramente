/**
 * Descripción: Creamos 3 clases para poder crear los distintos objetos necesarios para hacer funcionar el proyecto.
 */
class Planes {
    constructor (nombre, info, precio){
        this.nombre = nombre;
        this.info = info;
        this.precio = precio;
    }
}
class Consulta {
    constructor (nombre,comision){
        this.nombre = nombre;
        this.comision = comision;
    }
}
class ObraSocial {
    constructor (nombre,descuento){
    this.nombre = nombre;
    this.descuento = descuento;
    }
}

/**
 * Descripción: Creación de 3 planes con nombre, su información y su precio.
 */

const plan1 = new Planes ("Consulta Puntual", "Sesión única de 45 minutos aprox. con el profesional que más le convenga (según su disponibilidad)",700);
const plan2 = new Planes ("Consulta Bimestral", "Dos sesiones por mes de 45 minutos aprox. cada una con el profesional que más le convenga (según su disponibilidad)",1200);
const plan3 = new Planes ("Consulta Semanal", "Una sesión semanal por un mes de 45 minutos aprox. cada una con el profesional que más le convenga (según su disponibilidad)",2000);

/**
 * Descripción: Creación de un array para almacenar los planes creados anteriormente.
 * @param {Array} planes: variable donde se almacenan los planes creados.
 */
const planes = [];
planes.push(plan1);
planes.push(plan2);
planes.push(plan3);

/**
 * Descripción: Creación de dos tipos de consulta con nombre y su respectiva comisión.
 */
const consulta1 = new Consulta ("Consulta presencial",400);
const consulta2 = new Consulta ("Consulta online", 0);

/**
 * Descripción: Creación de un array para almacenar las consultas creadas anteriormente.
 * @param {Array} consultas: variable donde se almacenan las consultas creadas.
 */
const consultas = [];
consultas.push(consulta1);
consultas.push(consulta2);


/**
 * Decripción:Creación de 4 obras sociales.
 */
const obraSocial1 = new ObraSocial ("OSDE",1);
const obraSocial2 = new ObraSocial ("SancorSeguros",1);
const obraSocial3 = new ObraSocial ("Osep",0.3);
const obraSocial4 = new ObraSocial ("Particular",0);

/**
 * Descripción: Creación de un array para almacenar las obras sociales creadas anteriormente.
 * @param {Array} obrasSociales: variable donde se almacenan las obras sociales creadas.
 */
const obrasSociales = [];
obrasSociales.push (obraSocial1);
obrasSociales.push (obraSocial2);
obrasSociales.push (obraSocial3);
obrasSociales.push (obraSocial4);

/**
 * Descripción: Se crearon 3 funciones (infoPlanes, infoConsulta e infoObrasSociales), donde se muestra los detalles de los planes, las consultas, las obras sociales...
 * @param {number} planElegido: variable donde almaceno el plan que el cliente eligió (1, 2, 3).
 * @param {number} consultaElegida: variable donde almaceno la consulta que el cliente eligió (1, 2).
 * @param {number} obraSocialElegida: variable donde almaceno la obra social que el cliente eligió (1, 2, 3, 4).
 */
let planElegido;
let infoPlanes = () => {
    let info = ` (Frente a usted se muestran 3 planes sobre consultas con un profesional de la salud mental, porfavor, elija con 1, 2 o 3, el plan que más le convenga )
    PLANES:`;
    for (let i = 1; i <= planes.length; i++) {
        info += `
        ${i}) ${planes[i-1].nombre}: ${planes[i-1].info}
        Precio: $${planes[i-1].precio}`
    }
    planElegido = prompt (`${info}`);
}
infoPlanes();

let consultaElegida;

let infoConsulta = () => {
    let info = ` ¿Que tipo de consulta prefiere? considere, que la consulta presencial requiere una comisión aparte.
    Tipos de consulta:`;
    for (let i = 1; i <= consultas.length; i++) {
        info += `
        ${i}) ${consultas[i-1].nombre}
        Comisión: $${consultas[i-1].comision}`
    }
    consultaElegida = prompt (`${info}`);
}
infoConsulta ();

let obraSocialElegida;
let infoObrasSociales = () => {
    let info = ` Elije según el número que corresponda, que tipo de obra social tienes, si no tienes ninguna de las obras sociales de la lista, porfavor, pon el número referido a "particular"`;
    for (let i = 1; i <= obrasSociales.length; i++) {
        info += `
        ${i}) ${obrasSociales[i-1].nombre}
        Descuento: ${obrasSociales[i-1].descuento*100}%`
    }
    obraSocialElegida = prompt (`${info}`);
}
infoObrasSociales (); 

/**
 * Descripción: Se crean 3 funciones (esElPlan, esLaConsulta, esLaObraSocial), donde se utiliza el método .find() para elegir dentro de cada array el objeto que el cliente eligió
 * @param {object} elPlan: variable donde se almacena el plan que el cliente eligió.
 * @param {object} laConsulta: variable donde se almacena el tipo de consulta que el cliente eligió.
 * @param {object} laObraSocial: variable donde se almacena que obra social eligió el cliente.
 */

let elPlan;
let esElPlan = () => {
    elPlan = planes.find (clave => planes.indexOf (clave) === parseInt (planElegido)-1)
    return elPlan;
}
esElPlan();

let laConsulta;
let esLaConsulta = () => {
    laConsulta = consultas.find (clave => consultas.indexOf (clave) === parseInt (consultaElegida)-1)
    return laConsulta;
}
esLaConsulta();

let laObraSocial;
let esLaObraSocial= () => {
    laObraSocial = obrasSociales.find (clave => obrasSociales.indexOf (clave) === parseInt (obraSocialElegida)-1)
    return laObraSocial;
}
esLaObraSocial();

/**
 * Descripción:  Función que permite averiguar si el cliente quiere comprar el plan o no.
 * @param {boolean} finalizado : vairable donde se almacena si el cliente compró o no el plan.
 */
let finalizado = false;
let finalizo = (quiereComprarlo) => {
    if (quiereComprarlo === "SI") {
        return finalizado = true;
    }else {
        infoPlanes();
        infoConsulta();
        infoObrasSociales();
        esElPlan();
        esLaConsulta();
        esLaObraSocial();
        return finalizado = false;
    }
}
/**
 * Descripción: Función que se usa para calcular el descuento del valor de la suma entre el precio del plan y la comisión de la consulta.
 * @param {number} elDescuento: Variable donde se almacena el descuento.
 */
let elDescuento= 0;
let calcularDescuento = (valorTotalazo,descuentazo) => {
    elDescuento = valorTotalazo*descuentazo;
    return elDescuento;
}
/**
 * Descripción: Función que se utiliza para mostrar el detalle del plan, consulta y obra social elegidos. Además, se calcula el valor final, y se le pide al cliente si quiere o no comprar el plan.
 * @param {number} valorTotal: Variable donde se almacena la suma del precio del plan y la comisión de la consulta.
 * @param {number} valorFinal:Variable donde se almacena el valorTotal-elDescuento.
 * @param {string} quiereComprarlo: Variable donde se almacena si el cliente decide comprar o no el plan (SI/NO)
 */
let valorTotal = 0;
let valorFinal = 0;
let quiereComprarlo;
let mostrarDetalle = (plan, consulta, obraSocial) => {

    valorTotal = plan.precio + consulta.comision;

    calcularDescuento(valorTotal,obraSocial.descuento);
    valorFinal = valorTotal - elDescuento;
quiereComprarlo = prompt (`Detalles: 
Plan: ${plan.nombre}: $${plan.precio}
Consulta: ${consulta.nombre}: $${consulta.comision}
Obra Social: ${obraSocial.nombre}: Cubre: ${obraSocial.descuento * 100}%
TOTAL: $${valorFinal}
¿Desea adquirir este plan? (SI/NO) `);

quiereComprarlo=quiereComprarlo.toUpperCase();

finalizo (quiereComprarlo);
return finalizado;
}

/**
 * Descripción: Usamos un while para mostrar continuamente al cliente las opciones de los planes. La iteración no va a finalizar hasta que el cliente no decida obtener uno de los planes.
 */

while (finalizado == false) {
    if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "OSDE") {
        
mostrarDetalle(elPlan, laConsulta, laObraSocial);

    } else  if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "SancorSeguros") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);

    } else if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "Osep") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);

    } else if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "Particular") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "OSDE") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else  if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "SancorSeguros") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "Osep") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Puntual" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "Particular") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "OSDE") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else  if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "SancorSeguros") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "Osep") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "Particular") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "OSDE") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else  if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "SancorSeguros") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "Osep") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Bimestral" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "Particular") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "OSDE") {
        
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
    } else  if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "SancorSeguros") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "Osep") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta presencial" && laObraSocial.nombre=== "Particular") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "OSDE") {
        
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
    } else  if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "SancorSeguros") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "Osep") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);
        
    } else if (elPlan.nombre === "Consulta Semanal" && laConsulta.nombre === "Consulta online" && laObraSocial.nombre=== "Particular") {
        mostrarDetalle(elPlan, laConsulta, laObraSocial);

    }
}