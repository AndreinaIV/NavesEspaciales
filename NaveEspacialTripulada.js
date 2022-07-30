import NaveEspacial from "./NaveEspacial.js";

class NaveEspacialTripulada extends NaveEspacial {
    constructor(nombre, altura, velocidad, tipoEnergia, peso, tipoCombustible, paisOrigen, orbita, capacidadPersonas){
        super(nombre, altura, velocidad, tipoEnergia, peso, tipoCombustible, paisOrigen);
        this._orbita = orbita;
        this._capacidadPersonas = capacidadPersonas;
    }
}

export default NaveEspacialTripulada;