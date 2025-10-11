var alumnos = [
    "Carlos",
    "Carlos",
    "Cesar",
    "Regina",
    "Diego",
    "Andrea",
    "Valeria",
    "Mayela"
]

const alumnosApellido = [{
    nombre: "Carlos",
    apellido: "Valerio"
},
{
    nombre: "Cesar",
    apellido: "Gonzalez"
},
{
    nombre: "Regina",
    apellido: "Lopez"
},
{
    nombre: "Diego",
    apellido: "Fernandez"
},
{
    nombre: "Andrea",
    apellido: "Martinez"
},
{
    nombre: "Valeria",
    apellido: "Hernandez"
},
{
    nombre: "Mayela",
    apellido: "Jimenez"
}
]

const listaAlumnos = document.getElementById("listaAlumnos");

const button = document.querySelector(".query-button");
const input = document.querySelector("input");

button.addEventListener("click", function() {
    let showAlumnos = [];
    if (input.value === "")
        showAlumnos = alumnosApellido;
    else
        showAlumnos = alumnosApellido.filter(({nombre, apellido})=> {
            const completeName = (nombre + ' ' + apellido).toLocaleLowerCase();

            return nombre.toLowerCase().includes(input.value.toLowerCase()) || apellido.toLowerCase().includes(input.value.toLowerCase()) || completeName.includes(input.value.toLocaleLowerCase());
        });


    listaAlumnos.innerHTML = "";
    showAlumnos.map(({nombre, apellido}) => {
        const li = document.createElement("li");
        li.textContent = nombre + " " + apellido;
        listaAlumnos.appendChild(li);
    });
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});

if (input.value === "") {
    listaAlumnos.innerHTML = "";
    alumnosApellido.map(({nombre, apellido}) => {
        const li = document.createElement("li");
        li.textContent = nombre + " " + apellido;
        listaAlumnos.appendChild(li);
    });
}