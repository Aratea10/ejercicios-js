/*
Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo:
--*--
-***-
*****
*/

const pattern = [
  ["-", "-", "*", "-", "-"],
  ["-", "*", "*", "*", "-"],
  ["*", "*", "*", "*", "*"],
];

for (const row of pattern) {
  console.log(row.join(""));
}