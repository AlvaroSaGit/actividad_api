import { ejercicio1 } from './Ejercicio1/index.js';
import { ejercicio2 } from './Ejercicio2/index.js';
import { ejercicio3 } from './Ejercicio3/index.js';
import { ejercicio4 } from './Ejercicio4/index.js';

// pues aqui lanzamos el menu principal
let menu = prompt("seleccione el ejercicio que desea ejecutar:\n1. ejercicio 1\n2. ejercicio 2\n3. ejercicio 3\n4. ejercicio 4");

switch (menu) {
    case "1":
        ejercicio1();
        break;
    case "2":
        ejercicio2();
        break;
    case "3":
        ejercicio3();
        break;
    case "4":
        // aqui pedimos el id para pasarselo como parametro al ejercicio 4
        let idEliminar = prompt("ingrese el id de la publicacion que desea eliminar:");
        const respuesta = await ejercicio4(idEliminar);
        alert(respuesta)
        break;
    default:
        alert("opcion no valida, por favor elija un numero del 1 al 4.");
        break;
}