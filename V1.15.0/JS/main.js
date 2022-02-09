$(() => {

    //verificación de inicio de sesión
    if (JSON.parse(localStorage.getItem('usuario')) == null || JSON.parse(localStorage.getItem('usuario')).sesionIniciada == false) {
        botonNombreInicioSesion.val('Inicia Sesión');
    } else {
        botonNombreInicioSesion.val(JSON.parse(localStorage.getItem('usuario')).usuario);
        profileName.text(`${JSON.parse(localStorage.getItem('usuario')).usuario}`)
    }

    //Verificación del carrito
    let carrito = [];
    if (JSON.parse(localStorage.getItem('carrito')) == null) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
        carrito = JSON.parse(localStorage.getItem('carrito'));
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
            carrito = JSON.parse(localStorage.getItem('carrito'));
            console.log(carrito);

            btnComprar.click((e) => {
                let nuevoCarrito = [];
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
                carrito.push(elPlan);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                e.preventDefault();

                // carrito.forEach(item =>{

                // })

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
                        <div class="msjContratado" id="msjContratado">
                        <h4>¡Has contratado uno de nuestros servicios! Te enviaremos la información a tu email</h4>
                        </div>
                        `)
                        $("#msjContratado").fadeIn(300).delay(4000).fadeOut(300);
                        setTimeout(() => {
                            $("#msjContratado").remove()
                            cardNumber.val("");
                            cardCode.val("");
                            cardExpiration.val("");
                            DNI.val("");
                        }, 4600);
                        formTarjeta.addClass("oculto");
                    }
                })


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
        if (usuarioInicioSesion.val().length < 4 || usuarioInicioSesion.val().length > 15 || passwordInicioSesion.val().length < 4 || passwordInicioSesion.val().length > 20) {

            mainAll.append(`
             <div class="msjErrorInicioSesion" id="msjErrorInicioSesion">
                 <h4>
                     El nombre de usuario y la contraseña deben tener entre 4 a 15 caracteres
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
            console.log('no checkeado');
        }
    })

    buttonSendContact.click((e) => {
        e.preventDefault();
        if (userCompleteName.val().length < 6 || userCompleteName.val().length > 25 || msjTopic.val().length < 1 || msjTopic.val().length > 20 || userMensaje.val().length < 5 || userMensaje.val().length > 100) {
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
    

    <button type="button " class="btn col-lg-3 col-md-8 p-0 mainServicios__modalServicios"
    data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
    <div class="mainServicios__div mainServicios__div--${servicios[i].Img}">
        <h3>${servicios[i].Nombre}</h3>
    </div>
</button>

<div class=" modalServicio modal fade p-0" id="exampleModal${i}" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <button type="button" class="btn">+ info</button>
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
                    <button type="button " class="btn col-lg-3 col-md-8 p-0 mainServicios__modalServicios"
                        data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                        <div class="mainServicios__div mainServicios__div--${servicios[i].Img}">
                            <h3>${servicios[i].Nombre}</h3>
                        </div>
                    </button>

                    <div class=" modalServicio modal fade p-0" id="exampleModal${i}" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                           <button type="button" class="btn">+ info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    `)





                }

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
                                        <button type="button" class="btn">¡Contáctame!</button>
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