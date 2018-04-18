console.log('Hola mundo!');
var nombre = 'Adrian';
var mutar;
var edad = 28;
var deudas = 223.238;
mutar = deudas;
var fechaNacimiento = new Date();
var casado = false;
var estoyvacio = null;
var noestoyvacio = undefined;
//null undefined 0 -1 1

if (estoyvacio) {
    console.log('verdader');
} else {
    console.log('falso');
}

if (noestoyvacio) {
    console.log('verdader');
} else {
    console.log('falso');
}

if (casado) {
    console.log('verdader');
} else {
    console.log('falso');
}

//Json
//ctrl + a = seleccionar
//ctrl + alt + l =formatiar
var usuario = {
    "nombre": "Adrian",
    nombre: 'Adrian',
    apellido: 'Eguez',
    edad: sumarDosNumeros(14,14),
    imprimirEnConsola:sumarDosNumeros
        //function () {
    //    console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad)}
};

console.log(usuario.nombre);//"Adrian"
console.log('holiiiiii')
console.log(usuario)
delete usuario.edad
console.log(usuario);
usuario.cedula = '1726020801';
console.log(usuario);
//no se puede definir nombre en este archivo
//usuario.mascota.nombre = 'Cachetes';
//console.log(usuario);

usuario.mascota = {};
usuario.mascota.nombre = 'Cachetes';
console.log(usuario)
console.log(typeof nombre);//string
console.log(typeof edad);//number
console.log(typeof casado);//boolean
console.log(typeof fechaNacimiento);//objeto
console.log(typeof usuario);//objeto

function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroDos + numeroUno;
}

console.log(sumarDosNumeros(1, 2));//resulatdo 3

var sumaDosNumerosVersionDos = function noImportaSiEscribimosElNombre(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

mutar = sumarDosNumeros;

//funcion anonima
var sumaDosNumerosVersionTres = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumaDosNumerosVersionTres(1, 3));//resultado4
//imprimir desde un Jsom
usuario.imprimirEnConsola();//nombre+undefined
usuario.imprimirEnConsola();
console.log(usuario.imprimirEnConsola);

var arreglo = [
    1,
    2,
    3,
    4,
    2.2,
    undefined,
    null,
    "Adrian",
    sumarDosNumeros(1,2)
]

console.log(arreglo);