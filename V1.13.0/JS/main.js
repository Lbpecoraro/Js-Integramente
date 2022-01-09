$(() => {
    class Planes {
        constructor(nombre, descripcion, precio) {
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
        }
    }
    const plan1 = new Planes("Consulta Puntual", "Sesión única de 45 minutos aprox. con el profesional que más le convenga (según su disponibilidad)", 700);
    const plan2 = new Planes("Consulta Bimestral", "Dos sesiones por mes de 45 minutos aprox. cada una con el profesional que más le convenga (según su disponibilidad)", 1200);
    const plan3 = new Planes("Consulta Semanal", "Una sesión semanal por un mes de 45 minutos aprox. cada una con el profesional que más le convenga (según su disponibilidad)", 2000);

    let planes = [plan1, plan2, plan3];

    localStorage.setItem('planes', JSON.stringify(planes));

    let planecitos = JSON.parse(localStorage.getItem('planes'));

    for (let i = 0; i < planecitos.length; i++) {

        planesContainer.append(`
    <div id="plan${i+1}" class="plan p-0 col-lg-3 col-md-5 col-sm-8 col-8 mt-2">
    <div class="plan__info p-2">
        <h4>Incluye:</h4>
        <h5>${planecitos[i].descripcion}</h5>
        <h4>
        $${planecitos[i].precio}
        </h4>
    </div>
    <h3 class="m-0">${planecitos[i].nombre}</h3>
    </div>
    `);

        planesContainer.append(`
        <div id="planElegido${i+1}" class="planElegido"> 
              <h3 class="planElegido__h3">${planecitos[i].nombre}</h3>
              <p class="planElegido__p">${planecitos[i].descripcion}</p>
                    <div class="planElegido__div">
                       <span> Ars$${planecitos[i].precio}</span>
                       <input type="button" class="planElegido__contratar" value="Contratar">
                       <input type="button" id="botonCerrar" class="planElegido__botonCerrar botonCerrar" value="Cerrar">
                    </div>         
      </div>
    `);

    }

    let sesiones = $('.plan');
    let planesElegidos = $('.planElegido');

    planesElegidos.each(function (indice, elemento) {
        $(elemento).hide()
    })

    sesiones.each(function (ind, element) {
        $(element).click(() => {
            if ($(element).attr('id') === "plan1") {
                planesElegidos.eq(0).fadeIn(300);
                planesElegidos.eq(1).fadeOut(300);
                planesElegidos.eq(2).fadeOut(300);
            } else if ($(element).attr('id') === "plan2") {
                planesElegidos.eq(1).fadeIn(300);
                planesElegidos.eq(0).fadeOut(300);
                planesElegidos.eq(2).fadeOut(300);
            } else if ($(element).attr('id') === "plan3") {
                planesElegidos.eq(2).fadeIn(300);
                planesElegidos.eq(1).fadeOut(300);
                planesElegidos.eq(0).fadeOut(300);
            }
        })
    })

    let cerrar = $('.botonCerrar');
    cerrar.each(function (ind, element) {
        $(element).click(() => {
            planesElegidos.each(function (indice, elemento) {
                $(elemento).fadeOut(300)
            })
        })

    })

    $("#facebook").hide()
    $("#instagram").hide()
    $("#twitter").hide()
    facebook()


    // $("#facebook").fadeIn(1000).fadeOut(1000).fadeIn(1000)
    // $("#instagram").fadeIn(1000).fadeOut(1000).fadeIn(1000)
    // $("#twitter").fadeIn(1000).fadeOut(1000).fadeIn(1000)




    function facebook() {

        $("#facebook").fadeIn(1000).fadeOut(1000)
        instagram()
    }

    function instagram() {
        $("#instagram").delay(2000).fadeIn(1000).fadeOut(1000)
        twitter()
    }

    function twitter() {
        $("#twitter").delay(4000).fadeIn(1000).fadeOut(1000)

        $("#facebook").delay(4000).fadeIn(1000)
        $("#instagram").delay(3000).fadeIn(1000)
        $("#twitter").delay(2000).fadeIn(1000)
    }

})