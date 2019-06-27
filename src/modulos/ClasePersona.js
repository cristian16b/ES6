class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }

    toString(){
        return `${this._nombre}`;
    }
}

export {Persona};