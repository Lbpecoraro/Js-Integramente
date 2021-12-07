alert("Estás en el colegio y tu profesora de lengua y literatura te ha dado esta lista de libros para que elijas uno y lo leas, elije el que más te llame la atención mediante su número y obtendrás su información.");
/**
 * Descripción: creamos la clase "libro" con distintos atributos, que me permiten la creación de X cantidad de libros.
 */
class Libro {
    constructor(nombre,anioDePublicacion,autor,genero,precio) {
        this.nombre = nombre;
        this.anioDePublicacion = anioDePublicacion;
        this.autor = autor;
        this.genero = genero;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}
/**
 * Descripción: se crean distintos libros utilizando la clase Libro anteriormente mostrada.
 */
const libro1 = new Libro("Odisea",1906,"Homero","épica antigua",1000);
const libro2 = new Libro("Berserk",1989,"Kentaro Miura","Manga",500);
const libro3 = new Libro("Dune",1965,"Frank Herbert","ciencia ficción",1500);
const libro4 = new Libro("Lucha eterna",2021,"Marisol B. Grade","novela narrativa",1035);

/**
 * Descripción: Creamos un array que contenga los libros que creamos.
 */
const libros = [libro1,libro2,libro3,libro4]

/**
 * Descripción: Mostramos por pantalla las opciones de distintos libros para que el usuario seleccione uno de ellos.
 * @param {number} libroElegido: variable donde se almacena la elección del libro.
 */
let libroElegido = 0;
let elegirLibro = () => {
    libroElegido = prompt(`Libros:
    1) ${libro1.nombre}: $${libro1.precio}
    2) ${libro2.nombre}: $${libro2.precio}
    3) ${libro3.nombre}: $${libro3.precio}
    4) ${libro4.nombre}: $${libro4.precio}
    `)
    return libroElegido;
}


elegirLibro();


let comprarlo = "NO";
/**
 * Descripción: Se creó la función elegidito para obtener a través del find el libro que el usuario seleccionó.
 * @param {Libro} elegido: Variable donde se almacena el libro elegido.
 */
let elegido;
let elegidito = () => {
    elegido = libros.find(clave=> libros.indexOf(clave) === parseInt (libroElegido) -1)
    return elegido;
};
elegidito();

/**
 * Descripción: Creamos un ciclo while donde le seguimos preguntando al usuario si quiere comprar un libro hasta que nos diga que si (si, hay que insistir aveces para obtener ventas) Si elige que quiere comprarlo(SI) se interrumpe el ciclo while, si decide no comprarlo(NO), se le vuelve a mostrar la lista de libros para que seleccione otro libro, por lo tanto, el ciclo while continua hasta que el usuario decida comprar un libro (el vendedor menos insistente).  
 */
while (comprarlo.toUpperCase() !== "SI") {

        if (elegido) {
            comprarlo = prompt(`
        Nombre del libro: ${elegido.nombre}
        Autor: ${elegido.autor}
        Año de publicación: ${elegido.anioDePublicacion}
        Género: ${elegido.genero}
        Precio: $${elegido.precio}
        ¿Desea comprar el libro? (SI/NO)`)
            if (comprarlo.toUpperCase() === "SI") {
                alert(`Has adquirido este libro: "${elegido.nombre}"
    
    Muchas gracias por tu compra, nos comunicaremos en breve por los métodos de envio.`)
    elegido.vender();
                console.log(elegido.vendido);

            } else {
                elegirLibro();
                elegidito();
            }

        } else {
            alert("No tenemos ese libro, gil.");
            elegirLibro();
            elegidito();
        }

    
 
}