// http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/
class usuario {
    // necesario para inicializar
    constructor(username,edad) {
        this._username = username;
        this._edad = edad;
    }

    get username() {
        return this._username;
    }
}

const carlos = new usuario('pedro',2);
console.log(`su username es ${carlos._edad}`);
console.log(carlos.suusername());
alert(carlos._edad);
console.log(`pruebo acceder a atributo privado ${carlos._edad}`);

