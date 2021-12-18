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

let planes = [];
planes.push(plan1);
planes.push(plan2);
planes.push(plan3);

localStorage.setItem('1', JSON.stringify(planes));

let planesContainer = document.getElementById("planes");

let planecitos = JSON.parse(localStorage.getItem('1'));
for (const plan of planecitos) {
    const divPlan = document.createElement("div");
    divPlan.className += "plan col-3";
    divPlan.innerHTML = (` 
         <h2>${plan.nombre}</h2>
     <p>${plan.descripcion}</p>
     <span>${plan.precio}</span>
    `)
    planesContainer.appendChild(divPlan)
}