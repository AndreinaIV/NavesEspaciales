import NaveEspacial from "./NaveEspacial.js";

class NaveEspacialNoTripulada extends NaveEspacial{
    constructor(nombre, altura, velocidad, tipoEnergia, peso, tipoCombustible, paisOrigen, trabajo, orbita){
    super(nombre, altura, velocidad, tipoEnergia, peso, tipoCombustible, paisOrigen)
    this._trabajo = trabajo;
    this._orbita = orbita;
    }
}

export default NaveEspacialNoTripulada;