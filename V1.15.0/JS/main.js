$(() => {
    class Planes {
        constructor(nombre, descripcion, precio) {
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
        }
    }

    let planecitos = [];

    const planesURL = "data/planes.json";

    $.get(planesURL, (respuesta, estado) => {
        if (estado === "success") {
            planecitos = respuesta;


            for (let i = 0; i < planecitos.length; i++) {

                planesContainer.append(`
    <div id="plan${i+1}" class="plan p-0 col-lg-3 col-md-5 col-sm-8 col-8 mt-2">
    <div class="plan__info p-2">
        <h4>Incluye:</h4>
        <h5>${planecitos[i].info}</h5>
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
              <p class="planElegido__p">${planecitos[i].info}</p>
                    <div class="planElegido__div">
                       <span> Ars$${planecitos[i].precio}</span>
                       <input type="button" id="btnContratar" class="planElegido__contratar btnContratar" value="Contratar">
                       <input type="button" id="botonCerrar" class="planElegido__botonCerrar botonCerrar" value="Cerrar">
                    </div>         
      </div>
    `);

            }




        }



        let sesiones = $('.plan');
        let planesElegidos = $('.planElegido');

        planesElegidos.each(function (indice, elemento) {
            $(elemento).hide()
        })

        sesiones.each(function (ind, element) {
            $(element).click(() => {
                if ($(element).attr('id') === "plan1") {
                    if (formTarjeta.attr("class") === "row tarjeta justify-content-between align-items-center oculto") {
                        planesElegidos.eq(0).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);
                    } else {
                        formTarjeta.toggleClass("oculto");
                        planesElegidos.eq(0).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);
                    }

                } else if ($(element).attr('id') === "plan2") {
                    if (formTarjeta.attr("class") === "row tarjeta justify-content-between align-items-center oculto") {
                        planesElegidos.eq(1).fadeIn(300);
                        planesElegidos.eq(0).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);

                    } else {
                        formTarjeta.toggleClass("oculto");
                        planesElegidos.eq(1).fadeIn(300);
                        planesElegidos.eq(0).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);
                    }

                } else if ($(element).attr('id') === "plan3") {
                    if (formTarjeta.attr("class") === "row tarjeta justify-content-between align-items-center oculto") {
                        planesElegidos.eq(2).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(0).fadeOut(300);

                    } else {
                        formTarjeta.toggleClass("oculto");
                        planesElegidos.eq(2).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(0).fadeOut(300);
                    }

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

        //formulario tarjeta 

        let btnContratar = $('.btnContratar');
        btnContratar.each(function (ind, element) {
            $(element).click(() => {
                planesElegidos.eq(0).fadeOut(300);
                planesElegidos.eq(1).fadeOut(300);
                planesElegidos.eq(2).fadeOut(300);
                formTarjeta.toggleClass("oculto");

            })

        })
        const postTarjetaURL = "https://jsonplaceholder.typicode.com/posts";

        btnComprar.click((e) => {

            e.preventDefault();
            let nuevaTarjeta = {
                numeroTarjeta: cardNumber.val(),
                codigo: cardCode.val(),
                vencimiento: cardExpiration.val(),
                DNI: DNI.val()
            };
            $.ajax({
                method: "POST",
                url: postTarjetaURL,
                data: nuevaTarjeta,
                success: function (respuesta) {
                    console.log(respuesta);
                    mainIndex.append(`
                    <div class="msjContratado" id="msjContratado">
            <h4>¡Has contratado uno de nuestros servicios!</h4>
        </div>
                    `)
                    $("#msjContratado").fadeIn(300).delay(3000).fadeOut(300);
                    setTimeout(() => {
                        $("#msjContratado").remove()
                        cardNumber.val("");
                        cardCode.val("");
                        cardExpiration.val("");
                        DNI.val("");
                    }, 3600);
                    formTarjeta.toggleClass("oculto");
                }
            })

        })

        btnCancelar.click(() => {
            formTarjeta.toggleClass("oculto");
        })


























    })


})