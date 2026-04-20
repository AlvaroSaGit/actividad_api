const url = "http://localhost:3000";

// funcion para obtener datos de cualquier url
export async function get(endpoint){
    const res = await fetch(`${url}/${endpoint}`);
    const datos = await res.json();
    return datos;
}

