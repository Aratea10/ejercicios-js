const usuario = {
    nombre: 'Sara',
    apellidos: 'Gallego Méndez',
    temasBootcamp: [
        { nombre: 'Node.js', inicio: '2025-10-06' },
        { nombre: 'Git', inicio: '2025-10-01' },
        { nombre: 'React', inicio: '2025-11-03' },
    ],
    busquedaActiva: true,
};

const moduloReact = usuario.temasBootcamp.find(
    (m) => m.nombre.toLowerCase() === 'react'
);

if (moduloReact) {
    console.log(moduloReact.inicio); 
} else {
    console.log('No se encontró el módulo React.');
}