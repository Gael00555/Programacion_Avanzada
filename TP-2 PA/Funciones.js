//1)
function sumar(numero1,numero2){
return numero1+numero2;
}

console.log(sumar(5,8))
console.log(sumar(5,-4))
console.log(sumar(10, -4))
console.log(sumar(2.5, 3.5))
console.log(sumar(0, 0));


//2)
function multiplicar(numero1,numero2){
return numero1*numero2;
}

console.log(multiplicar(8,5))
console.log(multiplicar(11,-2))
console.log(multiplicar(3,5))
console.log(multiplicar(9,9))


//3)
const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
}

saludar('Juan')
saludar('Gonzalo')
saludar('Ricardo')
saludar('Marta')

//4)
function crearPersona(nombre,edad){
    return{
        nombre:nombre,
        edad:edad
    };
}

const persona1=crearPersona("Ana",35)
const persona2=crearPersona("Gonzalo",18)

console.log(persona1)
console.log(persona2)


//5)
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

const persona = crearPersona("Ana", 28);
console.log("Antes de actualizar:");
console.log(persona);

actualizarEdad(persona, 29);

console.log("\nDespués de actualizar:");
console.log(persona);


//6)
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(121));

//7)
function despedir(){
    function adios(){
        return "¡Adios,Hasta luego!";
    }

    return adios();
}

console.log(despedir());

//8)
function procesarArray(array, funcion) {
    return array.map(funcion);
}

function multiplicarPorDos(numero) {
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = procesarArray(numeros, multiplicarPorDos);

console.log(resultado);

//9)
function crearMultiplicador(x){
    return function (numero){
        return numero*x;
    };
}

const multiplicarPorTres = crearMultiplicador(3);
const multiplicarPorDiez = crearMultiplicador(10);

console.log(multiplicarPorTres(5));
console.log(multiplicarPorTres(8));
console.log(multiplicarPorDiez(4));

//10)
const sumarAnonima= function(numero1,numero2){
    return numero1+numero2;
}

console.log(sumarAnonima(5,8))
console.log(sumarAnonima(5,-4))
console.log(sumarAnonima(10, -4))
console.log(sumarAnonima(2.5, 3.5))
console.log(sumarAnonima(0, 0));    