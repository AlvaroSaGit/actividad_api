import {get} from '../util/index.js';


export async function ejercicio3() {
    console.log("--Ejecutando punto 3 --");

    // ecesitamos las 3 cosas para cruzar la informacion
    const usuarios = await get('users');
    const posts = await get('posts');
    const comentarios = await get('comments');

    let reporte_actividad = [];

    usuarios.forEach(function(usuario) {
        // se busca la id del usuario
        const sus_posts = posts.filter(function(p) {
            return p.userId == usuario.id;
        });

        //Se busca loscomentarios en los posts
        let total_comentarios_usuario = 0;
        
        sus_posts.forEach(function(p) {
            const comentarios_de_este_post = comentarios.filter(function(c) {
                return c.postId == p.id;
            });
            total_comentarios_usuario += comentarios_de_este_post.length;
        });

        // Se guarda el resultado
        reporte_actividad.push({
            nombre_usuario: usuario.name,
            total_comentarios: total_comentarios_usuario,
            comentarios: total_comentarios_usuario == 0 ? "Sin comentarios" : "Con Comentarios",
            estado: usuario.active ? 'activo' : 'inactivo'
        });
    });

    console.table(reporte_actividad);
}

ejercicio3();