// Lista de desarrolladores que tengan "JavaScript" en habilidades
function desarrolladoresJavascript(datos) {
  return datos.filter((dev) => dev.habilidades.includes('JavaScript'));
}

// Lista con los nombres de todos los proyectos
function nombresProyectos(datos) {
  return datos.flatMap((dev) => dev.proyectos.map((p) => p.nombre));
}

module.exports = { desarrolladoresJavascript, nombresProyectos };