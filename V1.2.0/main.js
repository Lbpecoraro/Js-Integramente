alert ("¡Hola! te preguntaremos unas cositas acerca de tu familia.");
let numeroIntegrantes = parseInt(prompt("Porfavor, ingresa el número de integrantes de tu familia con quienes convives, contandote a tí"));

let convivientes = "";
let texto;
let nombre;

for (let i = 1; i <= numeroIntegrantes; i++) {
    nombre= prompt ("Porfavor, ingrese el nombre de su familiar, recuerda escribir el tuyo también");
    if (isNaN(nombre)) {
        texto = `Familiar ${i}: ${nombre} <br>`;
    convivientes += texto + " ";
    } else {
        alert ("Según recuerdo, no hay nombres que sean números, porfavor, intentalo nuevamente.")
        nombre= prompt ("Porfavor, ingrese el nombre de su familiar, recuerda escribir el tuyo también");
        texto = `Familiar ${i}: ${nombre} <br>`;
    convivientes += texto + " ";
    
    }
    
}

document.write (convivientes);