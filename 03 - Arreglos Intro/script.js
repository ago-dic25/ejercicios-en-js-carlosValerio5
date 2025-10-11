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
    apellidoPaterno: "Valerio",
    apellidoMaterno: "Rios",
    matricula: "123456"
},
{
    nombre: "Cesar",
    apellidoPaterno: "Gonzalez",
    apellidoMaterno: "Lopez",
    matricula: "123457"
},
{
    nombre: "Regina",
    apellidoPaterno: "Lopez",
    apellidoMaterno: "Martinez",
    matricula: "123458"
},
{
    nombre: "Diego",
    apellidoPaterno: "Fernandez",
    apellidoMaterno: "Gonzalez",
    matricula: "123459"
},
{
    nombre: "Andrea",
    apellidoPaterno: "Martinez",
    apellidoMaterno: "Hernandez",
    matricula: "123460"
},
{
    nombre: "Valeria",
    apellidoPaterno: "Hernandez",
    apellidoMaterno: "Lopez",
    matricula: "123461"
},
{
    nombre: "Mayela",
    apellidoPaterno: "Jimenez",
    apellidoMaterno: "Ramirez",
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
        showAlumnos = alumnosApellido.filter(({nombre, apellidoPaterno, apellidoMaterno, matricula})=> {
            const completeName = (nombre + ' ' + apellidoPaterno + ' ' + apellidoMaterno).toLocaleLowerCase();

            return nombre.toLowerCase().includes(input.value.toLowerCase()) || apellidoPaterno.toLowerCase().includes(input.value.toLowerCase()) || apellidoMaterno.includes(input.value.toLocaleLowerCase()) || completeName.includes(input.value.toLocaleLowerCase()) || matricula.includes(input.value);
        });


    listaAlumnos.innerHTML = "";
    showAlumnos.map(({nombre, apellidoPaterno, apellidoMaterno, matricula}) => {
        const li = document.createElement("li");
        const name = document.createElement("span");
        const matriculaSpan = document.createElement("span");

        name.textContent = nombre + " " + apellidoPaterno + " " + apellidoMaterno;
        matriculaSpan.textContent = matricula;
        li.appendChild(name);
        li.appendChild(matriculaSpan);
        listaAlumnos.appendChild(li);
    });
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});

button.click();