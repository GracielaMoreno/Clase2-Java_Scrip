let nombre: String = 'graciela';
nombre = 'maria';
const cedula: string = '1726020801';//tipo de variable q no se puede reasignar
//cedula = '1247856363';
let apellido: any = 'moreno';//duck typing una buena practica es mejor no escribir el tipo de dato
apellido = 1;
apellido = {};
let edad: number = 1;
let casado: boolean = false;
let fechaNcimiento: Date = new Date();
let usuario = {
    nombre: 'graciela',
    edad: 28
};

class Usuario {

    nombre: String;//si no ponemos nada se guata como publico
    private edad: number;

    constructor(mNombre: String, mEdad: number) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    imprimirUsuario(saludo:String):String {//el void no es necesrio escribir si el meotdo no devuelve nada
        //template strings sirve para la concatenacion de datos
        return `${saludo}.Mi nombre es :${this.nombre},y mi edad es : ${this.edad}`;
    }
}

let adrian = new Usuario('graci', 23);
//console.log(adrian);
//console.log(usuario);
console.log(adrian.imprimirUsuario('hola'));

class UsuarioDos {
    constructor(public nombre:String,private _edad:number,private esposo?:UsuarioDos){//si le quitamos el public y el private no se guarda como propiedades de la clase
//se p0one la ? para definir un dato opcional 
    }
    get edad():number{
        return this._edad;
    }
    set edad(nuevaEdad:number){//VALIDACIONES CAMBIAR DATOS Y TRANSFORMARLOS
        this._edad = nuevaEdad;
    }
}
let graciela =new UsuarioDos('ALEX',23);
console.log('marley ',graciela);
graciela.edad = 25;
interface UsuarioTres {
    nombre:String;
    edad:number;
    esposa: Usuario

};
let carlos:UsuarioTres={
    nombre:'carlos',
    edad:18,
    esposa:new Usuario('MARIA',34)
};

console.log(carlos);