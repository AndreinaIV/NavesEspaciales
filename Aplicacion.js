import Vehiculo from "./Vehiculo.js";
import NaveEspacial from "./NaveEspacial.js";
import NaveEspacialLanzadera from "./NaveEspacialLanzadera.js";
import NaveEspacialNoTripulada from "./NaveEspacialNoTripulada.js";
import NaveEspacialTripulada from "./NaveEspacialTripulada.js";

class Aplicacion {
    iniciar(){
        let vehiculo1 = new Vehiculo();
        let vehiculo2 = new Vehiculo();
        console.log(vehiculo1.transportar())
        
        let naveEspacial1 = new NaveEspacial("Nave1", "10 metros","50km/h", "quimica", "150 toneladas", "nitrogeno liquido", "China")
        console.log(naveEspacial1);

        let naveEspacial2 = new NaveEspacial("Nave2", "50 metros", "80km/h", "quimica", "180 toneladas", "nitrogeno liquido", "EE.UU") 
        console.log(naveEspacial2);

        let naveEspacial3 = new NaveEspacial("Nave3", "80 metros", "150km/h", "quimica", "200 toneladas", "nitrogeno liquido", "Japón") 
        console.log(naveEspacial3);

        let naveEspacialLanzadera1 = new NaveEspacialLanzadera("NEL1", "180 metros", "1800km/h", "sólido", "1000 toneladas", "hidrogeno liquido", "Rusia", "1300 toneladas")
        console.log(naveEspacialLanzadera1);

        let naveEspacialLanzadera2 = new NaveEspacialLanzadera("NEL2", "200 metros", "2000km/h", "quimica", "1180 toneladas", "hidrogeno liquido", "Europa", "1400 toneladas")
        console.log(naveEspacialLanzadera2);

        let naveEspacialLanzadera3 = new NaveEspacialLanzadera("NEL3", "250 metros", "3000km/h", "quimica", "2300 toneladas", "hidrogeno liquido", "Japón", "1500 toneladas")
        console.log(naveEspacialLanzadera3);

        let naveEspacialNoTripulada1 = new NaveEspacialNoTripulada("NENT1","58,5 metros", "12000km/h", "quimico", "80 toneladas", "hidrógeno liquido", "EE.UU", "Estudiar cuerpos celestes", "8000km")
        console.log(naveEspacialNoTripulada1);

        let naveEspacialNoTripulada2 = new NaveEspacialNoTripulada("NENT2","55,9 metros", "12500km/h", "sólida", "77 toneladas", "hidrógeno liquido", "Rusia", "Estudiar satelites", "9000")
        console.log(naveEspacialNoTripulada2);

        let naveEspacialNoTripulada3 = new NaveEspacialNoTripulada("NENT3","59 metros", "12800km/h", "quimico", "78 toneladas", "hidrógeno liquido", "Europa", "Estudiar nuestro satelites", "8500")
        console.log(naveEspacialNoTripulada3);

        let naveEspacialTripulada1 = new NaveEspacialTripulada("Nave1","56,1 metros", "29000km/h", "sólida", "77 toneladas", "hidrógeno liquido", "EE.UU", "425km", "3")
        console.log(naveEspacialTripulada1);

        let naveEspacialTripulada2 = new NaveEspacialTripulada("Nave2","62 metros", "28000km/h", "sólida", "420 toneladas", "hidrógeno liquido", "Rusia", "386km", "7")
        console.log(naveEspacialTripulada2);

        let naveEspacialTripulada3 = new NaveEspacialTripulada("Nave3","57,8 metros", "27000km/h", "quimico", "320 toneladas", "hidrógeno liquido", "China", "400km", "3")
        console.log(naveEspacialTripulada3);

    }
}


let app = new Aplicacion();

app.iniciar();
