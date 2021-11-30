alert ("¡CUIDADO! saliste con tus amigos a chupar, pero cuando piden la cuenta, estan tan borrachos que ni siquiera saben cuanto es 2+2, ahora te propondremos una sensilla manera de calcular cuanto debe pagar cada uno, ten en cuenta que esto incluye el IVA y, aparte, la propina ¿listo?");

let totalAPagar = parseFloat(prompt ("¿cuanto dinero es el total de la cuenta? ponlo en números porfavor")).toFixed (2);
let cantidadPersonas= parseInt(prompt ("Ahora ¿cuantas personas son? ponlo en números."))
console.log(totalAPagar);

let totalMasIVA;
const calcularIVA = totalAPagar => {totalMasIVA = parseFloat (totalAPagar * 1.21).toFixed(2)}

let propina
const calculoPropina = totalAPagar =>{propina = parseFloat (totalAPagar*0.10).toFixed(2)}; 

let costoXPersona;
const costoPorPersona = (totalFinal, personas) => {
    costoXPersona = totalFinal / personas;
}

let propinaXPersona;
const propinaPorPersona = (propina, personas) => {
    propinaXPersona = propina / personas;
}

const detalle = (totalAPagar, personas) => {
calcularIVA(totalAPagar);

console.log(totalMasIVA);
costoPorPersona(totalMasIVA, personas);

 calculoPropina(totalAPagar);

 propinaPorPersona (propina, personas);

let totalFinal = parseFloat (costoXPersona + propinaXPersona).toFixed(2);

alert (`Detalle:
Cantidad de personas: ${personas}
Total a pagar por persona: ${costoXPersona}
Propina sugerida por persona: ${propinaXPersona}
Total final a pagar por persona: ${totalFinal}
`)
}

detalle(totalAPagar, cantidadPersonas);

