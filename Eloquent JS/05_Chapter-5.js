/************** FUNCIONES DE ORDEN SUPERIOR **************/

/* 
    El concepto de funciones de orden superior refiere a la 
    aplicación del concepto de abstracción a cada una de las 
    partes de una función que son susceptibles de ser abstraidas.

    La abstraccción es el proceso por el cual extraemos una
    parte de una función mayor a una función más pequeña con 
    el objetivo de simplificar esa función mayor y crear
    una pieza de codigo reutilizable.
*/

function repetir(n, accion) {
  for (let i = 0; i < n; i++) {
    accion(i);
  }
}

let etiquetas = [];

repetir(5, (i) => {
  etiquetas.push(`Unidad ${i + 1}`);
});

// console.log(etiquetas);

// Aqui podemos observar una closure que nos permite crear
// diferentes funciones mayorQueN basadonos en una función
// general de mayorQ.
function mayorQue(n) {
  return (m) => m > n;
}

let mayorQue10 = mayorQue(10);

// En este caso recibimos una funcion y tomamos una serie de
// arugmentos. Estos los retornamos en forma de un array
// y a este array le aplicamos la funcion recibida.
// Finalmente retornamos el resultado de dicha aplicación.
function ruidosa(funcion) {
  return (...argumentos) => {
    console.log("llamando con", argumentos);
    let resultado = funcion(...argumentos);
    console.log("llamada con", argumentos, ", retorno", resultado);
    return resultado;
  };
}

// Es curioso notar que esta sintaxis también ejecuta la funcion
// interna de la closure.
// ruidosa(Math.min)(3, 2, 1);

// Podriamos decir que las siguientes sintaxis son equivalentes
/* 
    ruidosa(Math.min)(3, 2, 1);

    const argumentos = ruidosa(Math.min);
    argumentos(3,2,1);
*/
/* 
    La diferencia entre ambas sintaxis es que la primera espera
    cierta flexibilidad de funcion, es decir que esta pueda cambiar
    mientras que en la segunda lo que pueden cambiar son los 
    argumentos pero la funcion recibida permanecerá estática.
*/

let emoji = "🐎";

// console.log(emoji)
// console.log(emoji.length)
// console.log(emoji[0])
// console.log(emoji.charCodeAt(0))
// console.log(emoji.codePointAt(0))

/****************** RECONOCIMIENTO DE TEXTO ****************/
function contarPor(elementos, nombreGrupo) {
  let cuentas = [];

  for (let elemento of elementos) {
    let nombre = nombreGrupo(elemento); // (5) => 5 > 2 -> true

    let conocido = cuentas.findi((c) => c.nombre == nombre);

    if (conocido == -1) {
      cuentas.push({ nombre, cuenta: 1 });
    } else {
      cuentas[conocido].cuenta++;
    }
  }
  return cuentas;
}
// console.log(contarPor([1, 2, 3, 4, 5], (n) => n > 2));

// Aplicando lo aprendido a caraceteres simbolicos

function codigosTexto(texto) {
  let codigos = contarPor(texto, (caracter) => {
    // El codePointAt() me devuelve el codigo completo del caracter en cuestion
    let codigo = codigoCaracter(caracter.codePointAt(0));
    // Si el codigo es representable, quiero su nombre, sino retorno "ninguno"
    return codigo ? codigo.name : "ninguno";
    // Esto me va a generar un arreglo de nombres y "ninguno"
    // Quiero filtrar todos los nombres, es decir, crear una array excluyendo los "ninguno"
  }).filter(({ name }) => name != "ninguno");
  // Ahora toca contar la cantidad de codigos que hay en el array o en su defecto si no hay
  let total = codigos.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No se encontraron codigos";
  // Con los codigos que hay quiero separarlos por nombre y retornar el porcentaje de cada uno de los codigos
  // por nombre que hay en el array
  return codigos
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}
// console.log(codigosTexto('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic




/****************** EJERICIOS ****************/

/* 
  Aplanamiento

  Use el método reduce en combinación con el método concat para “aplanar” un
  array de arrays en un único array que tenga todos los elementos de los arrays
  originales
*/

const aplanar = (array) => {
  return array.reduce((cadena, elemento) => cadena.concat(elemento), [])
}

// console.log(aplanar([["Hola"], ["me"], ["gusta"], ["el"], ["pan"], ["con"], ["queso"]]))

/* 
  Tu propio ciclo

  Escriba una función de orden superior llamada ciclo que proporcione algo así
  como una declaración de ciclo for. Esta toma un valor, una función de prueba,
  una función de actualización y un cuerpo de función. En cada iteración, primero
  ejecuta la función de prueba en el valor actual del ciclo y se detiene si esta
  retorna falso. Luego llama al cuerpo de función, dándole el valor actual. Y
  finalmente, llama a la función de actualización para crear un nuevo valor y
  comienza desde el principio.
  Cuando definas la función, puedes usar un ciclo regular para hacer los ciclos
  reales.
*/

const ciclo = (valor, prueba, setValor, cb) => {

  for (let valorActual = valor; prueba(valorActual); valorActual = setValor(valorActual)) {
    cb(valorActual)
  }
}


// ciclo(3, (n) => n < 5, (n) => n += 1 ,(n) => console.log(n))

/* 
  Cada

  De forma análoga al método some, los arrays también tienen un método every
  (“cada”). Este retorna true cuando la función dada devuelve verdadero para
  cada elemento en el array. En cierto modo, some es una versión del operador
  || que actúa en arrays, y every es como el operador &&.
  Implementa every como una función que tome un array y una función predicado como parámetros. 
  Escribe dos versiones, una usando un ciclo y una usando el método some.
*/

const everyWithFor = (array, predicado) => {

  for (let i = 0; i < array.length; i++) {
    if(!predicado(array[i])) return false
  }
  return true
}

// console.log(everyWithFor([1,1,1,1,1], (elementoInicial, elementoActual) => elementoInicial === elementoActual))

const everyWithSome = (array, predicado) => {

  return !array.some(elemento => !predicado(elemento, array[0]))
}

// console.log(everyWithSome([1,1,1,1,1], (a, b) => a === b ))

