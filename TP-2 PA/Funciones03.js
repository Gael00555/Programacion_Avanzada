//1) y 2)
function obtenerUsuarios() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .catch(error => {
            console.error("Error al obtener los usuarios:", error);
        });
}

obtenerUsuarios();

//3)
function imprimirNombresDeUsuarios() {
    obtenerUsuarios()
        .then(usuarios => {
            const nombres = usuarios.map(usuario => usuario.name);
            console.log(nombres);
        });
}


imprimirNombresDeUsuarios();

//4)
const usuarioPredefinido = {
    nombre: "Juan",
    password: "123456"
};

function autenticarUsuario(Credenciales) {
    if(
        Credenciales.nombre==usuarioPredefinido.nombre&&
        Credenciales.password==usuarioPredefinido.password
    ){
            return true; 
        } else{
            return false;
        }
}

console.log(autenticarUsuario({ nombre: "Juan", password: "123456" })); 
console.log(autenticarUsuario({ nombre: "Pedro", password: "abcdef" }));


//5)
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });
}


function obtenerUsuarios() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .catch(error => {
            console.error("Error al obtener los usuarios:", error);
        });
}

obtenerUsuarios().then(usuarios => {
    console.log(mapearUsuarios(usuarios));
});


//6)
function validarFormulario(datos) {
    if (
        datos.nombre && datos.nombre.trim() !== "" &&
        datos.email && datos.email.trim() !== "" &&
        datos.password && datos.password.trim() !== ""
    ) {
        return true;
    } else {
        return false;
    }
}


console.log(validarFormulario({ nombre: "Juan", email: "juan@example.com", password: "123456" }));
console.log(validarFormulario({ nombre: "Ana", email: "ana@mail.com", password: "1234" }));
console.log(validarFormulario({ nombre: "", email: "ana@mail.com", password: "1234" }));
console.log(validarFormulario({ nombre: "Ana", email: "   ", password: "1234" }));
console.log(validarFormulario({ nombre: "Ana", email: "ana@mail.com" }));



//7)
function obtenerPagina(datos,numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
console.log(obtenerPagina(numeros, 1)); 
console.log(obtenerPagina(numeros, 2)); 
console.log(obtenerPagina(numeros, 3));



//8)
function enviarDatos(data) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(respuesta => {
            console.log(respuesta);
        })
        .catch(error => {
            console.error("Error al enviar los datos:", error);
        });
}


enviarDatos({ title: "Mi post", body: "Contenido del post", userId: 1 });


//9)
function generarToken(usuario) {
    const payload = JSON.stringify(usuario);
    const token = btoa(payload);
    return token;
}


const usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const token = generarToken(usuario);

console.log(token);


//10)
function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}

const usuarioOriginal = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const cambios = { email: "ana.nueva@mail.com", edad: 30 };

const usuarioActualizado = actualizarUsuario(usuarioOriginal, cambios);

console.log("Usuario original:", usuarioOriginal);
console.log("Usuario actualizado:", usuarioActualizado);