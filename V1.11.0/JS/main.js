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

    let plan = document.createElement("div");
    plan.setAttribute("class", "plan p-0 col-lg-3 col-md-5 col-sm-8 col-8 mt-2");
    plan.setAttribute("id", `plan${i+1}`);

    plan.innerHTML = (`
    <div class="plan__info p-2">
        <h4>Incluye:</h4>
        <h5>${planecitos[i].descripcion}</h5>
        <h4>
        $${planecitos[i].precio}
        </h4>
    </div>
    <h3 class="m-0">${planecitos[i].nombre}</h3>
  `)
    let planModal = document.createElement("div");
    planModal.setAttribute("class", "planElegido oculto");
    planModal.setAttribute("id", `planElegido${i+1}`);

    planModal.innerHTML = (`
          <h3 class="planElegido__h3">${planecitos[i].nombre}</h3>
          <p class="planElegido__p">${planecitos[i].descripcion}</p>
                <div class="planElegido__div">
                   <span> Ars$${planecitos[i].precio}</span>
                   <input type="button" class="planElegido__contratar" value="Contratar">
                   <input type="button" id="botonCerrar" class="planElegido__botonCerrar botonCerrar" value="Cerrar">
                </div>         
`)
    planesContainer.appendChild(plan);
    planesContainer.appendChild(planModal);

}

for (const plan of sesiones) {
    plan.addEventListener("click", () => {
        if (plan.id.includes("1")) {
            planesElegidos[0].classList.toggle("oculto");
            if (planesElegidos[1].classList.contains("oculto") == false) {
                planesElegidos[1].classList.toggle("oculto");
            } else if (planesElegidos[2].classList.contains("oculto") == false) {
                planesElegidos[2].classList.toggle("oculto");
            }
        } else if (plan.id.includes("2")) {
            planesElegidos[1].classList.toggle("oculto");
            if (planesElegidos[0].classList.contains("oculto") == false) {
                planesElegidos[0].classList.toggle("oculto");
            } else if (planesElegidos[2].classList.contains("oculto") == false) {
                planesElegidos[2].classList.toggle("oculto");
            }
        } else if (plan.id.includes("3")) {
            planesElegidos[2].classList.toggle("oculto");
            if (planesElegidos[0].classList.contains("oculto") == false) {
                planesElegidos[0].classList.toggle("oculto");
            } else if (planesElegidos[1].classList.contains("oculto") == false) {
                planesElegidos[1].classList.toggle("oculto");
            }
        }
    })

}
for (const close of cerrar) {
    close.addEventListener("click", () => {
        for (const elegidos of planesElegidos) {
            elegidos.classList.add("oculto");
        }

    })
}