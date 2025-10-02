// Lista de desarrolladores que tengan "JavaScript" en habilidades
function desarrolladoresJavascript(datos) {
    return datos.filter((dev) => dev.habilidades.includes('JavaScript'));
}


// Lista con los nombres de todos los proyectos
function nombresProyectos(datos) {
    return datos
        .map((dev) => dev.proyectos)
        .flat()
        .map((p) => p.nombre);
}

moduloReact.exports = { desarrolladoresJavascript, nombresProyectos };