import { get, eliminar } from '../util/index.js';

export async function ejercicio4(usuarioId){
    // Comentario
    //console.log("--ejecutando ejercicio 4--");

    const posts = await get('posts');
    const comentarios = await get('comments');


    console.table(posts);

    // Comprobando si hay algun post existente con el .find
    // Busca y compara con los id de post y usuarioID
    const postExistente = posts.find(p => p.id === usuarioId);

    if(!postExistente){
        console.error("La publicacion no existe");
    }

    // comentario existente
    const comentarioExistente = comentarios.some(c => Number(c.postId) === Number(usuarioId));

    // .find retorna el objeto o undefined
    if(comentarioExistente){
        return "No se puede eliminar la publicacion tiene comentario existente.";
    }
    else{
        await eliminar('posts',usuarioId);
        return "Publicacion eliminada correctamente.";
    }
}

