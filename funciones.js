// function declaration
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Juan");
saludar("María");
saludar("Pedro");

// function expression
const saludar2 = function(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar2("Ana");
saludar2("Luis");
saludar2("Carlos");

// arrow function
const saludar3 = (nombre) => {
    console.log(`Hola ${nombre}`);
}
saludar3("Elena");
saludar3("Jorge");
saludar3("Sofía");

// function con parámetros 
const actividad = (nombre, rol) => {
    console.log(`La persona ${nombre},esta realizando la tarea de ${rol}`);
}   

actividad("Juan", "Desarrollador");
actividad("María", "Diseñadora");
actividad("Pedro", "Tester");

// parametros por default de las funciones
const actividad2 = (nombre, rol = "Desarrollador") => {
    console.log(`La persona ${nombre},esta realizando la tarea de ${rol}`);
}

actividad2("Juan");
actividad2("María");


