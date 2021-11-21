/**
 * @challenge: Crear un algoritmo con un condicional.
 * 
 * @version: v1.1.0
 * @author: Lucia Pecoraro
 * @fecha: 20/11/2021
 *
 * History:

 */

alert("Hola, procederemos a calcular tu IMC (índice de masa corporal), te pediremos algunos datos necesarios para esto.")
let peso= prompt("Ingrese su peso en kg");
let altura= prompt("Ingrese su altura en metros o cm");
let IMC; 

if (altura.indexOf(".") == -1) {
    altura= altura / 100;
    IMC= peso /  Math.pow(altura,2);
    IMC= parseFloat(IMC).toFixed(2);

    if (IMC < 18.5) {
     alert (`Tu IMC es de ${IMC}, significa que tu peso es bajo o insuficiente en relación a tu altura.`); 
    } else if (IMC >= 18.5 && IMC <=24.9) {
        alert (`Tu IMC es de ${IMC}, significa que tu peso es normal en relación a tu altura.`); 
       } else if (IMC >= 25 && IMC <=29.9) {
        alert (`Tu IMC es de ${IMC}, significa que posiblemente tengas sobrepeso en relación a tu altura.`); 
       } else if (IMC >30) {
        alert (`Tu IMC es de ${IMC}, significa que te encuentres con obesidad en relación a tu altura.`); 
       }

    }
else {
    IMC= peso /  Math.pow(altura,2);
    IMC= parseFloat(IMC).toFixed(2);

    if (IMC < 18.5) {
        alert (`Tu IMC es de ${IMC}, significa que tu peso es bajo o insuficiente en relación a tu altura.`); 
       } else if (IMC >= 18.5 && IMC <=24.9) {
           alert (`Tu IMC es de ${IMC}, significa que tu peso es normal en relación a tu altura.`); 
          } else if (IMC >= 25 && IMC <=29.9) {
           alert (`Tu IMC es de ${IMC}, significa que posiblemente tengas sobrepeso en relación a tu altura.`); 
          } else if (IMC >30) {
           alert (`Tu IMC es de ${IMC}, significa que te encuentres con obesidad en relación a tu altura.`); 
          }
}
