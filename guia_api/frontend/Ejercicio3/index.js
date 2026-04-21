import { get } from '../util/index.js';

export async function ejercicio3() {
    const idPublicacion = 1;

    let reporte_actividad = [];

    // Consultar todas las publicaciones
    const posts = await get('posts');
    const comentarios = await get('comments');

    console.log("=== TODAS LAS PUBLICACIONES ===");
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

    // Datos de salida
    reporte_actividad.push({
        "Titulo": publicacion.title,
        "Contenido": publicacion.body,
        "Numero_de_comentarios_asociados": comentariosAsociados.length,
        "Tiene_comentarios": tieneComentarios ? "Si" : "No"
    });

    console.table(reporte_actividad);
}

ejercicio3();