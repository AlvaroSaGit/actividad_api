// Importando get
import {get} from '../util/index.js'

// funcion para el report ede usuarios
export async function ejercicio1(){
    try{
        // datos de peticion al servidor
        const usuarios = await get ('users');
        const posts = await get ('posts');

        // Se buscara y por cada usuario de la lista se evaluara
        let reporte = [];

        usuarios.forEach(function(usuario){

            // Comparamos el id del usuario con el id del post
            const su_publicacion = posts.filter(function(post){
                return post.userId == usuario.id;
            })

            reporte.push({
                // Se guarda el nombre del usuario
                nombre_usuario:usuario.name,
                // y el total de post con .legnth
                total_post:su_publicacion.length
            });
        })

        console.table(reporte);
    }
    catch(error){
        console.error("Error en el reporte de usuarios:", error);
    }
    
}