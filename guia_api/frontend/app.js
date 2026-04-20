import { ejercicio1 } from './Ejercicio1/index.js';
import { ejercicio2 } from './Ejercicio2/index.js';
import { ejercicio3 } from './Ejercicio3/index.js';
import { ejercicio4 } from './Ejercicio4/index.js';

switch (mensajeReporte){
    case 1:
        // Envio el ID a eliminar
        const respuesta = await ejercicio1(mensajeReporte);

        console.log(respuesta);

    case 2:
        // Envio el ID a eliminar
        const respuesta = await ejercicio2(mensajeReporte);

        console.log(respuesta);

        break;
    case 3:
        // Envio el ID a eliminar
        const respuesta = await ejercicio3(mensajeReporte);

        console.log(respuesta);

        break;
    case 4:
        // Envio el ID a eliminar
        const respuesta = await ejercicio4(mensajeReporte);

        console.log(respuesta);
        break;
    default:
        console.log("No ha ingresado nada");
}


