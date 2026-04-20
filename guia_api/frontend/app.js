import { ejercicio4 } from './Ejercicio4/index.js';

let mensajeReporte = prompt("Ingrese la ID a eliminar");

// Envio el ID a eliminar
const respuesta = await ejercicio4(mensajeReporte);

console.log(respuesta);