var nombre = 'graciela';
nombre = 'maria';
var cedula = '1726020801'; //tipo de variable q no se puede reasignar
//cedula = '1247856363';
var apellido = 'moreno'; //duck typing una buena practica es mejor no escribir el tipo de dato
apellido = 1;
apellido = {};
var edad = 1;
var casado = false;
var fechaNcimiento = new Date();
var usuario = {
    nombre: 'graciela',
    edad: 28
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Usuario.prototype.imprimirUsuario = function (saludo) {
        //template strings sirve para la concatenacion de datos
        return saludo + ".Mi nombre es :" + this.nombre + ",y mi edad es : " + this.edad;
    };
    return Usuario;
}());
var adrian = new Usuario('graci', 23);
//console.log(adrian);
//console.log(usuario);
console.log(adrian.imprimirUsuario('hola'));
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad, esposo) {
        this.nombre = nombre;
        this._edad = _edad;
        this.esposo = esposo;
        //se p0one la ? para definir un dato opcional 
    }
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var graciela = new UsuarioDos('ALEX', 23);
console.log('marley ', graciela);
graciela.edad = 25;
;
var carlos = {
    nombre: 'carlos',
    edad: 18,
    esposa: new Usuario('MARIA', 34)
};
console.log(carlos);
