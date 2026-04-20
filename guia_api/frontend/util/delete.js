const url = "http://localhost:3000";

// funcion para eliminar un registro por su id
export async function eliminar(endpoint, id) {
    // Res - responder / response, objeto de respuesta
    const res = await fetch(`${url}/${endpoint}/${id}`,{method: 'delete'});
    // El metodo .ok vuelve el objeto de respuesta en true or false
    return res.ok;
}

