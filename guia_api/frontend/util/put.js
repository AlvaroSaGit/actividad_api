// El archivo put.js es lo mismo que update.js

// funcion para actualizar un registro por su id (metodo put)

export async function actualizar(endpoint, id, datos){
    // res o response
    const res = await fetch(`${url}/${endpoint}/${id}`,{
        // la accion de actualizar o reemplazar
        method: 'put',
        // la etiqueta del contenido
        headers: {
            'content-type': 'application/json'
        },
        // los datos nuevos convertidos a texto
        body: JSON.stringify(datos)
    })

    // devolver el dato ya actualizado
    return await res.json();
}
