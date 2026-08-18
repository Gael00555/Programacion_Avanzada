//1)
const Libro=new Object();
Libro.Titulo="El Quijote";
Libro.Autor="Miguel de Cervantes";
Libro.Año_Publicacion=1605;

console.log(Libro.Titulo);
console.log(Libro.Autor);
console.log(Libro.Año_Publicacion);

//2)
const direccion = new Object();
direccion.calle = "Calle 123";
direccion.ciudad = "Concepción del Uruguay";
direccion.pais = "Argentina";


const estudiante = new Object();
estudiante.nombre = "Juan Pérez";
estudiante.edad = 21;
estudiante.direccion = direccion;  

console.log(estudiante.direccion.calle);
console.log(estudiante.direccion.ciudad);
console.log(estudiante.direccion.pais);




//3)
const LibroDescripcion=new Object();{
LibroDescripcion.Titulo="El Quijote";
LibroDescripcion.Autor="Miguel de Cervantes";
LibroDescripcion.Año_Publicacion=1605;
LibroDescripcion.descripcion=function(){
return `El libro "${this.Titulo}" fue escrito por ${this.Autor}.`;
}
}

console.log(LibroDescripcion.descripcion());

//4)
const Producto = new Object(); 
    Producto.Nombre = "Camiseta";
    Producto.Precio = 13.99;
    Producto.Disponible = true;


for (const propiedad in Producto) {
    console.log(`${propiedad}: ${Producto[propiedad]}`);
}
//5)
Producto.Precio = 11.99;

console.log("\nProducto actualizado:");
console.log(Producto);

//6)
function tienePropiedad(objeto,nombrePropiedad){
    return nombrePropiedad in objeto
}

console.log(tienePropiedad(Producto,"Nombre"));
console.log(tienePropiedad(Producto,"Color"));
console.log(tienePropiedad(Producto,"Disponible"));
//7)
console.log("Producto antes de eliminar la propiedad 'Disponible':");
console.log(Producto);

delete Producto.Disponible;

console.log("Producto después de eliminar la propiedad 'Disponible':");
console.log(Producto);

//8)

const persona1 = {
    nombre: "Ana",
    edad: 28
};

const persona2 = {
    ciudad: "Madrid",
    profesion: "Diseñadora"
};

const combinacion= Object.assign({}, persona1, persona2);
console.log(combinacion);

//9)
const estudiante2 = new Object();
estudiante2.nombre = "Juan Pérez";
estudiante2.edad = 21;
estudiante2.direccion = "Calle 123"

const copiaEstudiante=JSON.parse(JSON.stringify(estudiante2))

copiaEstudiante.nombre = "Carlos López";
copiaEstudiante.edad = 25;

console.log("Estudiante original:");
console.log(estudiante2);

console.log("\nCopia modificada:");
console.log(copiaEstudiante);

//10)
const libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año_Publicacion: 1605,

    get añoDePublicacion() {
        return this.año_Publicacion;
    },
    set añoDePublicacion(nuevoAño) {
        this.año_Publicacion = nuevoAño;
    }
};

libro.añoDePublicacion = 1615; 
console.log(libro.año_Publicacion);