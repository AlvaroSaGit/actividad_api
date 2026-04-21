// importar la herramienta de consulta
import {get} from '../util/index.js';

export async function ejercicio2(){

    try {
        const posts = await get('posts');
        const comments = await get('comments');

        let reporte = [];

        posts.forEach(function(post){
            // Relacionamos usando postId
            const sus_comentarios = comments.filter(function(comentario){
                return comentario.postId == post.id;
            });

            // Agregamos la logica del estado que pide el punto 2
            let estado_publicacion = "";
            if(sus_comentarios.length > 0){
                estado_publicacion = "Con comentarios";
            } else {
                estado_publicacion = "Sin comentarios";
            }

            reporte.push({
                titulo: post.title,
                numero_comentarios: sus_comentarios.length,
                estado: estado_publicacion
            });
        });

        console.table(reporte);

    } catch (error) {
        console.error(error);
    }
}