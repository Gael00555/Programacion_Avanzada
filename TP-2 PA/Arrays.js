//1) y 3)
const frutas = ["manzana","banana","pera"];

frutas.push("naranja");
frutas.pop();           
console.log(frutas); 

for (const fruta of frutas) {
    console.log(fruta);
}

//2)
const matriz=[[1, 2, 3],[4, 5, 6], [7, 8, 9]];

console.log(matriz[1][1]);

// //4)
const numeros = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15];
const cuadrados = numeros.map(num => num * num);
console.log(cuadrados);

//5)
function filtrarMayoresDe(array, limite) {
    return array.filter(num => num > limite);
}

console.log(filtrarMayoresDe(numeros, 7)); 

//6)

function sumarElementos(array) {
    return array.reduce((suma, num) => suma + num, 0);
}

console.log(sumarElementos(numeros)); 


//7)

numeros.some(num=> num >10) 

console.log(numeros.some(num => num > 10));


//8)

numeros.every(num=> num >0);
console.log(numeros.every(num => num > 0)); 


//9)
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Ana", edad: 35 }
];

personas.find(persona => persona.edad > 30); 

console.log(personas.find(persona=> persona.edad > 30));


//10) 
const palabras = ["hamaca","abrir","buscar","abrazar","kilo","paloma","mesa"];
palabras.sort();

console.log(palabras);

