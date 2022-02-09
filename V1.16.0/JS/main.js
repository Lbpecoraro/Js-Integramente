$(() => {

    //verificación de inicio de sesión
    if (JSON.parse(localStorage.getItem('usuario')) == null || JSON.parse(localStorage.getItem('usuario')).sesionIniciada == false) {
        botonNombreInicioSesion.val('Inicia Sesión');
        let usuarioLogeado = {
            usuario: "",
            email: "",
            sesionIniciada: false,
        }
        localStorage.setItem('usuario', JSON.stringify(usuarioLogeado))
    } else {
        botonNombreInicioSesion.val(JSON.parse(localStorage.getItem('usuario')).usuario);
        profileName.text(`${JSON.parse(localStorage.getItem('usuario')).usuario}`);
        $('#profileEmail').text(`${JSON.parse(localStorage.getItem('usuario')).email}`);
    }

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
              <h4> *INFORMACIÓN IMPORTANTE* Al decidir contratar, usted estará de acuerdo con lo siguiente:</h4>
              <p> Al contratar un plan desde esta sección, se asignará por defecto una sesión individual con un profesional al azar para realizar su consulta.</p>
              <p> Al contratar un servicio/plan, este no puede ser cancelado por consideración de los tiempos y honorarios del profesional en cuestión</p>
              <p>En caso de estar interesado en un servicio o profesional puntual, recomendamos ir a nuestra sección de servicios para contratar algo más específico</p>
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
                    if (tarjetaPlan.attr("class") === "tarjetaPlan oculto") {
                        planesElegidos.eq(0).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);
                    } else {
                        tarjetaPlan.toggleClass("oculto");
                        planesElegidos.eq(0).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);
                    }

                } else if ($(element).attr('id') === "plan2") {
                    if (tarjetaPlan.attr("class") === "tarjetaPlan oculto") {
                        planesElegidos.eq(1).fadeIn(300);
                        planesElegidos.eq(0).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);

                    } else {
                        tarjetaPlan.toggleClass("oculto");
                        planesElegidos.eq(1).fadeIn(300);
                        planesElegidos.eq(0).fadeOut(300);
                        planesElegidos.eq(2).fadeOut(300);
                    }

                } else if ($(element).attr('id') === "plan3") {
                    if (tarjetaPlan.attr("class") === "tarjetaPlan oculto") {
                        planesElegidos.eq(2).fadeIn(300);
                        planesElegidos.eq(1).fadeOut(300);
                        planesElegidos.eq(0).fadeOut(300);

                    } else {
                        tarjetaPlan.toggleClass("oculto");
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


            $(element).click((e) => {
                if (JSON.parse(localStorage.getItem('usuario')).sesionIniciada == true) {
                    planesElegidos.eq(0).fadeOut(300);
                    planesElegidos.eq(1).fadeOut(300);
                    planesElegidos.eq(2).fadeOut(300);
                    let profesionalesIndexURL = "data/ntrosprof.json"

                    $.get(profesionalesIndexURL, (rta, est) => {

                        if (est === "success") {
                            profesionales = rta;


                            let elemento = element.parentElement.parentElement;
                            let elementoName = $(elemento).find('h3').text();
                            $(tarjetaPlan).find("h3").text(elementoName);

                            e.stopImmediatePropagation();
                            tarjetaPlan.toggleClass("oculto");
                            btnContratar2.click((e) => {
                                e.stopImmediatePropagation();
                                let calendario = $(tarjetaPlan).find('div.calendar').find("input").val();
                                if (calendario == 0) {
                                    mainIndex.append(`
                                    <div class="msjErrorCalendario" id="msjErrorCalendario">
                                          <h4>Debe seleccionar una fecha/hora obligatoriamente.</h4>
                                          </div>
                                    `)
                                    $("#msjErrorCalendario").fadeIn(300).delay(6000).fadeOut(300);
                                    setTimeout(() => {
                                        $("#msjErrorCalendario").remove()

                                    }, 4600);
                                } else {
                                    let elementoName = $(tarjetaPlan).find("h3").text();

                                    let calendario = $(tarjetaPlan).find('div.calendar').find("input").val();
                                    let hora = $(tarjetaPlan).find('select').val();
                                    let profesional = profesionales[Math.floor(Math.random() * (7 - 0 + 1)) + 0].Nombre;


                                    let elPlan = {
                                        nombrePlan: elementoName,
                                        fecha: calendario,
                                        hora: hora,
                                        profesional: profesional
                                    }

                                    formTarjeta.removeClass("oculto");
                                    tarjetaPlan.addClass("oculto");
                                    comprarFunction(elPlan)
                                }

                            })
                        }
                    })
                } else {
                    mainIndex.append(`
           <div class="msjErrorSesion" id="msjErrorSesion">
   <h4>Necesitas iniciar sesión para poder contratar uno de nuestros servicios, porfavor, logeate.</h4>
   </div>
           `)
                    $("#msjErrorSesion").fadeIn(300).delay(4000).fadeOut(300);
                    setTimeout(() => {
                        $("#msjErrorSesion").remove()

                    }, 4600);
                }
            })
        })

        //plan tarjeta
        botonCerrar2.click(() => {
            tarjetaPlan.toggleClass("oculto");

        })

        //compra con tarjeta
        const postTarjetaURL = "https://jsonplaceholder.typicode.com/posts";

        const comprarFunction = (elPlan) => {

            btnComprar.click((e) => {
                e.preventDefault();

                if (cardNumber.val().length !== 16 || cardCode.val().length != 3 || cardExpiration.val().length < 5 || DNI.val().length < 7 || DNI.val().length > 8) {
                    mainIndex.append(`
                    <div class="msjErrorTarjeta" id="msjErrorTarjeta">
                          <h4>El número de la tarjeta debe ser igual a 16, el código es un número de 3 dígitos, la fecha de vencimiento debe ser mayor a 5 dígitos, el DNI debe tener entre 7 y 8 caracteres.</h4>
                          </div>
                    `)
                    $("#msjErrorTarjeta").fadeIn(300).delay(6000).fadeOut(300);
                    setTimeout(() => {
                        $("#msjErrorTarjeta").remove()

                    }, 6600);
                } else {

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
                            mainIndex.append(`
                            <div class="detalleContrato" id="detalleContrato">
                            <h2>Muchas gracias por adquirir nuestros servicios.</h2>
                            <p>Detalle del servicio:</p>
                            <div>
                                <h3>Plan: <span class="elSpan">${elPlan.nombrePlan}</span></h3>
                                <h4>Profesional: <span class="elSpan">${elPlan.profesional}</span></h4>
                                <p>Fecha: <span class="elSpan">${elPlan.fecha}</span></p>
                                <span>Hora: <span class="elSpan">${elPlan.hora}</span></span>
                            </div>
                            <p>La información correspondiente estará llegando al mail asociado a su cuenta.</p>
                        </div>
                           `)
                            $("#detalleContrato").fadeIn(300).delay(10000).fadeOut(300);
                            setTimeout(() => {
                                $("#detalleContrato").remove();
                                cardNumber.val("");
                                cardCode.val("");
                                cardExpiration.val("");
                                DNI.val("");
                            }, 10600);
                            formTarjeta.addClass("oculto");
                        }
                    })
                }




            })


        }





        btnCancelar.click(() => {
            formTarjeta.toggleClass("oculto");
        })



    })



    // INICIO DE SESION

    InicioDeSesion.click((e) => {
        e.preventDefault();
        if (JSON.parse(localStorage.getItem('usuario')) == null || JSON.parse(localStorage.getItem('usuario')).sesionIniciada == false) {
            formInicioDeSesion.toggleClass('ocultarTarjeta');
        } else {
            userProfile.toggleClass('ocultarTarjeta');
            botonCerrarSesion.click(() => {
                let usuarioLogeado = JSON.parse(localStorage.getItem('usuario'));
                usuarioLogeado['sesionIniciada'] = false;
                localStorage.setItem('usuario', JSON.stringify(usuarioLogeado));
                userProfile.addClass('ocultarTarjeta');
                botonNombreInicioSesion.val('Inicia Sesión')
            })
        }
    })



    btnInicioSesion.click((e) => {
        e.preventDefault();
        if (usuarioInicioSesion.val().length < 4 || usuarioInicioSesion.val().length > 15 || emailInicioSesion.val().length < 10 || emailInicioSesion.val().length > 25 || passwordInicioSesion.val().length < 4 || passwordInicioSesion.val().length > 20) {

            mainAll.append(`
             <div class="msjErrorInicioSesion" id="msjErrorInicioSesion">
                 <h4>
                     El nombre de usuario y la contraseña deben tener entre 4 a 15 caracteres y el mail debe contener entre 10 y 25 caracteres
                 </h4>
             </div>
             `)
            $('#msjErrorInicioSesion').fadeIn(300).delay(3000).fadeOut(200);
            setTimeout(() => {
                $('#msjErrorInicioSesion').remove();
            }, 3600);

        } else {
            let usuarioLogeado = {
                usuario: usuarioInicioSesion.val(),
                email: emailInicioSesion.val(),
                sesionIniciada: true,
            }
            localStorage.setItem('usuario', JSON.stringify(usuarioLogeado));
            botonNombreInicioSesion.val(usuarioInicioSesion.val());
            mainAll.append(`
        <div class="msjExitoInicioSesion" id="msjExitoInicioSesion">
            <h4>BIENVENID@!</h4>
        </div>
        `)
            $("#msjExitoInicioSesion").fadeIn(300).delay(3000).fadeOut(200);
            setTimeout(() => {
                $("#msjExitoInicioSesion").remove()
            }, 3600);
            formInicioDeSesion.addClass('ocultarTarjeta');
            profileName.text(`${JSON.parse(localStorage.getItem('usuario')).usuario}`)
            $('#profileEmail').text(`${JSON.parse(localStorage.getItem('usuario')).email}`)
        }

    })


    //////////////////////  CONSULTAS CONTACTO  //////////////////////

    /**
     * Descripción: Uso del método POST para enviar los datos de un formulario para luego mostrar un mensaje de confirmación cuando se envíen los datos.
     * @param {Object} nuevoMensaje: Objeto donde guardo los datos que el usuario ingresó en el formulario.
     */

    const postContactURL = "https://jsonplaceholder.typicode.com/posts"


    $('#terminos').click(() => {
        if ($('#terminos').is(':checked')) {
            console.log('checkeado');
        } else {
            console.log('descheckeado');
        }
    })

    buttonSendContact.click((e) => {
        e.preventDefault();
        if (userCompleteName.val().length < 6 || userCompleteName.val().length > 25 || msjTopic.val().length < 1 || msjTopic.val().length > 40 || userMensaje.val().length < 5 || userMensaje.val().length > 100) {
            $('#mainContacto').append(`
                  <div id="msjContactError" class="msjContactError">
                      <h4>El nombre y apellido deben tener entre 6 y 25 caracteres, el asunto debe tener entre 1 y 20 caracteres y el mensaje debe tener entre 5 y 100 caracteres.</h4>
                  </div>
                  `)
            $('#msjContactError').fadeIn(300).delay(6000).fadeOut(300);
            setTimeout(() => {
                $('#msjContactError').remove();
            }, 6600);
        } else if ($('#terminos').is(':checked') == false) {
            $('#mainContacto').append(`
                  <div id="msjContactError" class="msjContactError">
                      <h4>Debes aceptar los términos y condiciones</h4>
                  </div>
                  `)
            $('#msjContactError').fadeIn(300).delay(3000).fadeOut(300);
            setTimeout(() => {
                $('#msjContactError').remove();
            }, 3600);
        } else {
            let nuevoMensaje = {
                nombreUsuario: userCompleteName.val(),
                emailUsuario: userEmail.val(),
                asuntoUsuario: msjTopic.val(),
                mensajeUsuario: userMensaje.val()
            }
            $.ajax({
                method: "POST",
                url: postContactURL,
                data: nuevoMensaje,
                success: function (respuesta) {
                    $('#mainContacto').append(`
                      <div id="msjSuccess" class="msjSuccess">
                          <h4>¡Hemos recibido tu consulta!</h4>
                          <p>Te responderemos a la brevedad</p>
                      </div>
                      `)
                    $('#msjSuccess').fadeIn(300).delay(3000).fadeOut(300);
                    setTimeout(() => {
                        $('#msjSuccess').remove();
                        userCompleteName.val(""),
                            msjTopic.val(""),
                            userEmail.val(""),
                            userMensaje.val("")
                        $('#terminos').trigger("click");
                    }, 3600);
                }
            })
        }

    })


    ////////////   ¡SERVICIOS!   ////////////


    let serviciosURL = "../data/servicios.json";

    $.get(serviciosURL, (respuesta, estado) => {
        if (estado === "success") {
            servicios = respuesta;

            for (let i = 0; i < servicios.length; i++) {
                if (i <= 2) {

                    serviciosCantidadContainer.append(`
    

    <button type="button" class="btn col-lg-3 col-md-8 p-0 mainServicios__modalServicios" id="btnServicio${i}">
    <div class="mainServicios__div mainServicios__div--${servicios[i].Img}">
        <h3>${servicios[i].Nombre}</h3>
    </div>
</button>

<div class="modalServicio p-0 oculto" id="exampleModal${i}">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card tarjetaServicio">
                    <div class="tarjetaServicio__info">
                        <div class="card-body">
                            <h5 class="card-title">${servicios[i].Nombre}</h5>
                            <p class="card-text">
                                ${servicios[i].Info}
                            </p>
                        </div>
                        <button type="button" class="btn contratarServicio">Contratar servicio</button>
                        <button type="button"  class="btn cerrarServicio">Cerrar servicio</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




    `)

                } else {
                    serviciosEspecialidadContainer.append(`

                    <!-- Button trigger modal -->
                    <button type="button" class="btn col-lg-3 col-md-8 p-0 mainServicios__modalServicios" id="btnServicio${i}">
                        <div class="mainServicios__div mainServicios__div--${servicios[i].Img}">
                            <h3>${servicios[i].Nombre}</h3>
                        </div>
                    </button>

                    <div class=" modalServicio p-0 oculto" id="exampleModal${i}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body p-0">
                                    <div class="card tarjetaServicio">
                                        <div class="tarjetaServicio__info">
                                            <div class="card-body">
                                                <h5 class="card-title">${servicios[i].Nombre}</h5>
                                                <p class="card-text">
                                                ${servicios[i].Info}
                                                </p>
                                            </div>
                                           <button type="button"  class="btn contratarServicio">Contratar servicio</button>
                                           <button type="button"  class="btn cerrarServicio">Cerrar servicio</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    `)





                }

            }

            $(".mainServicios__modalServicios").each((ind, element) => {
                $(element).click(() => {
                    if ($(element).attr("id") === "btnServicio0") {
                        $("#exampleModal0").removeClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio1") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").removeClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio2") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").removeClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio3") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").removeClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio4") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").removeClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio5") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").removeClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio6") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").removeClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio7") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").removeClass("oculto");
                        $("#exampleModal8").addClass("oculto");

                    } else if ($(element).attr("id") === "btnServicio8") {
                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").removeClass("oculto");

                    }
                })

            })

            botonCerrar3.click(() => {
                tarjetaPlanServicios.addClass("oculto");
            });
            btnCancelar1.click(() => {
                formTarjeta1.addClass("oculto");
            });

            $(".cerrarServicio").each(function (ind, element) {

                $(element).click(() => {
                    $("#exampleModal0").addClass("oculto");
                    $("#exampleModal1").addClass("oculto");
                    $("#exampleModal2").addClass("oculto");
                    $("#exampleModal3").addClass("oculto");
                    $("#exampleModal4").addClass("oculto");
                    $("#exampleModal5").addClass("oculto");
                    $("#exampleModal6").addClass("oculto");
                    $("#exampleModal7").addClass("oculto");
                    $("#exampleModal8").addClass("oculto");
                })
            })


            $(".contratarServicio").each(function (ind, element) {

                $(element).click(() => {
                    $(".modalServicio").each((i, item) => {

                        $("#exampleModal0").addClass("oculto");
                        $("#exampleModal1").addClass("oculto");
                        $("#exampleModal2").addClass("oculto");
                        $("#exampleModal3").addClass("oculto");
                        $("#exampleModal4").addClass("oculto");
                        $("#exampleModal5").addClass("oculto");
                        $("#exampleModal6").addClass("oculto");
                        $("#exampleModal7").addClass("oculto");
                        $("#exampleModal8").addClass("oculto");
                    })


                    $.get(serviciosURL, (r, e) => {
                        if (e === "success") {
                            if (JSON.parse(localStorage.getItem('usuario')).sesionIniciada == true) {
                                tarjetaPlanServicios.removeClass('oculto');
                                let elementoParent = element.parentElement;
                                let elementH5 = $(elementoParent).find("div").find("h5").text();
                                $(tarjetaPlanServicios).find("h3").find("span").text(elementH5);

                                btnContratar3.click(() => {

                                    let plan = $(tarjetaPlanServicios).find("select.planServicio").val();
                                    let profesional = $(tarjetaPlanServicios).find("select.profesionalContratar").val();
                                    let calendario = $(tarjetaPlanServicios).find('div.calendar').find("input").val();
                                    let hora = $(tarjetaPlanServicios).find('select.horariosServicios').val();

                                    if (calendario == 0) {
                                        mainServicios.append(`
                                        <div class="msjErrorCalendario" id="msjErrorCalendario">
                                              <h4>Debe seleccionar una fecha/hora obligatoriamente.</h4>
                                              </div>
                                        `)
                                        $("#msjErrorCalendario").fadeIn(300).delay(6000).fadeOut(300);
                                        setTimeout(() => {
                                            $("#msjErrorCalendario").remove()

                                        }, 4600);
                                    } else {

                                        let elPlanServicio = {
                                            servicio: elementH5,
                                            plan: plan,
                                            profesional: profesional,
                                            calendario: calendario,
                                            hora: hora,
                                        }
                                        comprarFunctionServicio(elPlanServicio);
                                        formTarjeta1.removeClass("oculto");
                                        tarjetaPlanServicios.addClass("oculto");
                                    }


                                })
                            } else {
                                mainServicios.append(`
                       <div class="msjErrorSesion" id="msjErrorSesion">
               <h4>Necesitas iniciar sesión para poder contratar uno de nuestros servicios, porfavor, logeate.</h4>
               </div>
                       `)
                                $("#msjErrorSesion").fadeIn(300).delay(4000).fadeOut(300);
                                setTimeout(() => {
                                    $("#msjErrorSesion").remove()

                                }, 4600);
                            }

                        }
                    })
                })

            })
            const postTarjetaURLServicio = "https://jsonplaceholder.typicode.com/posts";

            const comprarFunctionServicio = (elPlan) => {

                btnComprar1.click((e) => {
                    e.preventDefault();
                    if (cardNumber1.val().length !== 16 || cardCode1.val().length != 3 || cardExpiration1.val().length < 5 || DNI1.val().length < 7 || DNI1.val().length > 8) {
                        console.log(cardCode1);
                        mainServicios.append(`
                    <div class="msjErrorTarjeta" id="msjErrorTarjeta">
                          <h4>El número de la tarjeta debe ser igual a 16, el código es un número de 3 dígitos, la fecha de vencimiento debe ser mayor a 5 dígitos, el DNI debe tener entre 7 y 8 caracteres.</h4>
                          </div>
                    `)
                        $("#msjErrorTarjeta").fadeIn(300).delay(6000).fadeOut(300);
                        setTimeout(() => {
                            $("#msjErrorTarjeta").remove()

                        }, 6600);
                    } else {

                        let nuevaTarjeta = {
                            numeroTarjeta: cardNumber1.val(),
                            codigo: cardCode1.val(),
                            vencimiento: cardExpiration1.val(),
                            DNI: DNI1.val()
                        };
                        $.ajax({
                            method: "POST",
                            url: postTarjetaURLServicio,
                            data: nuevaTarjeta,
                            success: function (respuesta) {
                                mainServicios.append(`
                            <div class="detalleContratoServicio" id="detalleContrato">
                            <h2>Muchas gracias por adquirir nuestros servicios.</h2>
                            <p>Detalle del servicio:</p>
                            <div>
                            <h3>Servicio: <span class="elSpan">${elPlan.servicio}</span></h3>
                                <h4>Plan: <span class="elSpan">${elPlan.plan}</span></h4>
                                <h5>Profesional: <span class="elSpan">${elPlan.profesional}</span></h5>
                                <p>Fecha: <span class="elSpan">${elPlan.calendario}</span></p>
                                <span>Hora: <span class="elSpan">${elPlan.hora}</span></span>
                            </div>
                            <p>La información correspondiente estará llegando al mail asociado a su cuenta.</p>
                        </div>
                           `)
                                $("#detalleContrato").fadeIn(300).delay(10000).fadeOut(300);
                                setTimeout(() => {
                                    $("#detalleContrato").remove();
                                    cardNumber1.val("");
                                    cardCode1.val("");
                                    cardExpiration1.val("");
                                    DNI1.val("");
                                }, 10600);
                                formTarjeta1.addClass("oculto");
                            }
                        })
                    }




                })


            }

        }

    })





    //////////////////// Profesionales ////////////////////

    let profesionalesURL = "../data/ntrosprof.json"

    $.get(profesionalesURL, (respuesta, estado) => {

        if (estado === "success") {

            profesionales = respuesta;

            for (let i = 0; i < profesionales.length; i++) {

                profesionalesContainer.append(`
        
        
        <!-- Button trigger modal -->
                <button type="button " class="btn mainProfesionales__modalProfesional col-lg-5 col-10 p-0 "
                    data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                    <div class="profesional ">
                        <div class="profesional__img profesional__img--${profesionales[i].Img}"></div>
                        <div class="profesional__info">
                            <p> <b>Nombre y apellido:</b> ${profesionales[i].Nombre} </p>
                            <p> <b>Especialidad:</b> ${profesionales[i].Especialidad} </p>
                            <p> <b>Corriente:</b> ${profesionales[i].Corriente} </p>
                            <p> <b>Años de experiencia:</b> ${profesionales[i].AnosExp} </p>
                        </div>
                    </div>
                </button>
                <!-- Modal -->
                <div class=" modalProfesional modal fade p-0" id="exampleModal${i}" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card tarjetaProfesional">
                                    <img src="../images/${profesionales[i].Img}.jpg" class="card-img-top" alt="...">
                                    <div class="tarjetaProfesional__info">
                                        <div class="card-body">
                                            <h5 class="card-title">${profesionales[i].Nombre}</h5>
                                            <p class="card-text">${profesionales[i].Info}</p>
                                        </div>
                                        <ul class=" list-group list-group-flush">
                                            <li class="list-group-item">Especialidad en ${profesionales[i].Especialidad}
                                            </li>
                                            <li class="list-group-item">Corriente ${profesionales[i].Corriente} </li>
                                            <li class="list-group-item">${profesionales[i].AnosExp} años de experiencia</li>
                                            <li class="list-group-item">Matrícula: ${profesionales[i].Matricula}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        
        
        `)

            }

        }

    })



















})