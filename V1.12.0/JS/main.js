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
        <div id="planElegido${i+1}" class="planElegido oculto"> 
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

    sesiones.each(function (ind, element) {
        console.log(planesElegidos.eq(0).hasClass('oculto'));
        $(element).click(() => {
            if ($(element).attr('id') === "plan1") {
                if (planesElegidos.eq(0).hasClass('oculto') === true) {

                    planesElegidos.eq(0).removeClass("oculto")
                } else {
                    planesElegidos.eq(0).addClass("oculto")
                }
                if (planesElegidos.eq(1).hasClass('oculto') === false) {
                    planesElegidos.eq(1).addClass("oculto");
                } else if (planesElegidos.eq(2).hasClass('oculto') === false) {
                    planesElegidos.eq(2).addClass("oculto");
                }
            } else if ($(element).attr('id') === "plan2") {
                if (planesElegidos.eq(1).hasClass('oculto') === true) {

                    planesElegidos.eq(1).removeClass("oculto")
                } else {
                    planesElegidos.eq(1).addClass("oculto")
                }
                if (planesElegidos.eq(0).hasClass('oculto') === false) {
                    planesElegidos.eq(0).addClass("oculto");
                } else if (planesElegidos.eq(2).hasClass('oculto') === false) {
                    planesElegidos.eq(2).addClass("oculto");
                }

            } else if ($(element).attr('id') === "plan3") {

                if (planesElegidos.eq(2).hasClass('oculto') === true) {

                    planesElegidos.eq(2).removeClass("oculto")
                } else {
                    planesElegidos.eq(2).addClass("oculto")
                }
                if (planesElegidos.eq(0).hasClass('oculto') === false) {
                    planesElegidos.eq(0).addClass("oculto");
                } else if (planesElegidos.eq(1).hasClass('oculto') === false) {
                    planesElegidos.eq(1).addClass("oculto");
                }
            }

        })
    })



    let cerrar = $('.botonCerrar');
    cerrar.each(function (ind, element) {
        console.log(element);
        $(element).click(() => {
            console.log("hola");
            planesElegidos.each(function (indice, elemento) {
                $(elemento).addClass("oculto")
            })
        })

    })


})