const url = "http://localhost:3000";

// funcion para crear un nuevo registro
export async function crear(endpoint, datos){
    // res o response
    const res = await fetch(`${url}/${endpoint}`,{
        // El meotodo crear
        method: 'post',
        // La etiqueta del contenido
        headers:{
            'content-type': 'application/json'
        },
        // Los datos convertidos a texto
        body: JSON.stringify(datos)
    })

    // Esperar la respuesta del servidor
    return await res.json();
}
