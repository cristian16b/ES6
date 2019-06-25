// http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/
class Usuario {
    // necesario para inicializar
    constructor(username,edad) {
        // por convencion se usa _nombrevariable
        this._username = username;
        this._edad = edad;
    }

    get username() {
        return this._username;
    }

    get edad() {
        return this._edad;
    }

    toString() {
        return `${this._username}-${this._edad}`;
    }
}

class Estudiante extends Usuario {
    // necesario para inicializar
    constructor(username,edad,carrera = 'No definida') {
        super(username,edad);
        this._carrera = carrera;
    }

    toString() {
        return `${super.toString()}-${this._carrera}`;
    }
}

const carlos = new Estudiante('pedro',2);
console.log(carlos.toString());

const carlos2 = new Estudiante('pedro',2,'ing');
console.log(carlos2.toString());
 