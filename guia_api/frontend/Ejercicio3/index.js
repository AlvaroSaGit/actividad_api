import { get } from '../util/index.js';

export async function ejercicio3() {
    const idPublicacion = 1;
    
    let reporte_actividad = [];

    // consultar todas las publicaciones
    const posts = await get('posts');
    const comentarios = await get('comments');

    console.log("=== TODAS LAS PUBLICACIONES ===");
    console.table(posts);

    // buscar publicacion especifica por id
    const publicacion = posts.find(function(post) {
        return post.id == idPublicacion;
    });

    if (!publicacion) {
        console.log("no se encontro la publicacion con id:", idPublicacion);
        return;
    }

    // consultar comentarios relacionados con esa publicacion
    const comentariosAsociados = comentarios.filter(function(comentario) {
        return comentario.postId == publicacion.id;
    });

    // validar si existen o no comentarios
    const tieneComentarios = comentariosAsociados.length > 0;

    // datos de salida
    reporte_actividad.push({
        "Titulo": publicacion.title,
        "Contenido": publicacion.body,
        "Numero_de_comentarios_asociados": comentariosAsociados.length,
        "Tiene_comentarios": tieneComentarios ? "Si" : "No"
    });

    console.table(reporte_actividad);
}
