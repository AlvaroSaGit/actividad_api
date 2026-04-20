import {get} from '../util/index.js';


export async function ejercicio3() {
    console.log("--Ejecutando punto 3 --");

    const idPublicacion = 1;

    // Consultar todas las publicaciones
    const posts = await get('posts');
    const comentarios = await get('comments');

    console.table(posts);

    // Buscar publicación específica por ID
    const publicacion = posts.find(function(post) {
        return post.id == idPublicacion;
    });

    if (!publicacion) {
        console.log("No se encontró la publicación con ID:", idPublicacion);
        return;
    }

    // Consultar comentarios relacionados con esa publicación
    const comentariosAsociados = comentarios.filter(function(comentario) {
        return comentario.postId == publicacion.id;
    });

    // Validar si existen o no comentarios
    const tieneComentarios = comentariosAsociados.length > 0;

    // se guardan los resultados 
    reporte_actividad.push({
        titulo: publicacion.title,
        contenido: publicacion.body,
        numero_de_comentarios_asociados: comentariosAsociados.length,
        estado_de_comentarios: tieneComentarios ? "con comentarios" : "sin comentarios"
    });
    console.table(reporte_actividad);
}

ejercicio3();