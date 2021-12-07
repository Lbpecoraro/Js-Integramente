/**
 * Descripción: Se crea la clase libro con su constructor que tendrá su ficha técnica (parámetros)
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
}
/**
 * Descripción: Se crea la clase librería que recibe como parametro un array de libros, luego como método, se crea "ordenarPrecio" el cual nos permite ordenar de manera creciente o decreciente el precio de los libros. 
 * @param {array} ordenado: variable donde se almacena el nuevo array ordenado.
 */
class Libreria {
    constructor(libros) {
        this.libros = [...libros];
    }
    ordenarPrecio(orden) {
        let compararPrecio = (a,b) => {
            if (orden === "+") {
                return a.precio - b.precio;
            } else if (orden === "-") {
                return b.precio - a.precio;
            } else {
                return a.precio + b.precio;
            }
        }
        let ordenado = this.libros.sort(compararPrecio);
        ordenado.forEach(clave => document.write(`${clave.nombre} : $${clave.precio} <br>`))

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
 * @param {array} libros: variable donde se almacenan los 4 libros creados.
 */
const libros = [];
libros.push(libro1);
libros.push(libro2);
libros.push(libro3);
libros.push(libro4);
/**
 * @param {Libreria} libreria1: se crea una nueva libreria y se le pasa como parametro el array libros.
 */
const libreria1 = new Libreria(libros);
/**
 * @param {string} orden: variable donde se almacena la decision del usuario sobre como ordenar los precios de los libros.
 */
let orden = prompt(`De esta lista de 4 libros a su disposición
Libros:
    1) ${libro1.nombre}: $${libro1.precio}
    2) ${libro2.nombre}: $${libro2.precio}
    3) ${libro3.nombre}: $${libro3.precio}
    4) ${libro4.nombre}: $${libro4.precio}
seleccione si prefiere ver sus precios ordenados de manera creciente (+) o decreciente (-).`)

libreria1.ordenarPrecio(orden);
console.log(libros);