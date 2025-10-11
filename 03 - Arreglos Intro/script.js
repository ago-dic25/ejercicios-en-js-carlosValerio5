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
    apellido: "Valerio",
    matricula: "123456"
},
{
    nombre: "Cesar",
    apellido: "Gonzalez",
    matricula: "123457"
},
{
    nombre: "Regina",
    apellido: "Lopez",
    matricula: "123458"
},
{
    nombre: "Diego",
    apellido: "Fernandez",
    matricula: "123459"
},
{
    nombre: "Andrea",
    apellido: "Martinez",
    matricula: "123460"
},
{
    nombre: "Valeria",
    apellido: "Hernandez",
    matricula: "123461"
},
{
    nombre: "Mayela",
    apellido: "Jimenez",
    matricula: "123462"
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
        showAlumnos = alumnosApellido.filter(({nombre, apellido, matricula})=> {
            const completeName = (nombre + ' ' + apellido).toLocaleLowerCase();

            return nombre.toLowerCase().includes(input.value.toLowerCase()) || apellido.toLowerCase().includes(input.value.toLowerCase()) || completeName.includes(input.value.toLocaleLowerCase()) || matricula.includes(input.value);
        });


    listaAlumnos.innerHTML = "";
    showAlumnos.map(({nombre, apellido, matricula}) => {
        const li = document.createElement("li");
        li.textContent = nombre + " " + apellido + " - " + matricula;
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
    alumnosApellido.map(({nombre, apellido, matricula}) => {
        const li = document.createElement("li");
        li.textContent = nombre + " " + apellido + " - " + matricula;
        listaAlumnos.appendChild(li);
    });
}