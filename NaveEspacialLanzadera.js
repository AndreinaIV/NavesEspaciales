import NaveEspacial from "./NaveEspacial.js";


class NaveEspacialLanzadera extends NaveEspacial{
    constructor(nombre, altura, velocidad, tipoEnergia, peso, tipoCombustible, paisOrigen, cargaMaxima){
     super(nombre, altura, velocidad, tipoEnergia, peso, tipoCombustible, paisOrigen);
     this._cargaMaxima = cargaMaxima;
    }
}

export default NaveEspacialLanzadera;