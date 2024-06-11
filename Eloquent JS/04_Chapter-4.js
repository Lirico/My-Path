/* 
    Estrucutra de Datos

    Arreglos y objetos

    Algo de teoria interesante:

    let unObjeto = {izquierda: 1, derecha: 2};
    console.log(unObjeto.izquierda);
    // → 1
    delete unObjeto.izquierda;
    console.log(unObjeto.izquierda);
    // → undefined
    console.log("izquierda" in unObjeto);
    // → false
    console.log("derecha" in unObjeto);
    // → true
    El operador binario in (“en”), cuando se aplica a un string y un objeto, te
    dice si ese objeto tiene una propiedad con ese nombre. 

    Para saber qué propiedades tiene un objeto, puedes usar la función Object
    .keys. Le das un objeto y devuelve un array de strings—los nombres de las
    65
    propiedades del objeto.

    console.log(Object.keys({x: 0, y: 0, z: 2}));
    // → ["x", "y", "z"]

    Hay una función Object.assign que copia todas las propiedades de un objeto
    a otro.

    let objetoA = {a: 1, b: 2};
    Object.assign(objetoA, {b: 3, c: 4});
    console.log(objetoA);
    // → {a: 1, b: 3, c: 4}


    -- Mutabilidad --

    Llegaremos a la programación real pronto. Pero primero, hay una pieza más
    de teoría por entender.
    Vimos que los valores de objeto pueden ser modificados. Los tipos de valores discutidos en capítulos anteriores, como números, strings y booleanos, son
    todos inmutables—es imposible cambiar los valores de aquellos tipos. Puedes
    66
    combinarlos y obtener nuevos valores a partir de ellos, pero cuando tomas un
    valor de string específico, ese valor siempre será el mismo. El texto dentro de él
    no puede ser cambiado. Si tienes un string que contiene "gato", no es posible
    que otro código cambie un carácter en tu string para que deletree "rato".
    Los objetos funcionan de una manera diferente. Tu puedes cambiar sus
    propiedades, haciendo que un único valor de objeto tenga contenido diferente
    en diferentes momentos.

    let objeto1 = {valor: 10};
    let objeto2 = objeto1;
    let objeto3 = {valor: 10};
    console.log(objeto1 == objeto2);
    // → true
    console.log(objeto1 == objeto3);
    // → false

    Cuando comparas objetos con el operador == en JavaScript, este los compara por identidad: producirá true solo si ambos objetos son precisamente el
    mismo valor. Comparar diferentes objetos retornara false, incluso si tienen
    propiedades idénticas.
*/

// ADMINISTRADOR DE TAREAS

let listaDeTareas = [];
function recordar(tarea) {
  listaDeTareas.push(tarea);
}
function obtenerTarea() {
  return listaDeTareas.shift();
}
function recordarUrgentemente(tarea) {
  listaDeTareas.unshift(tarea);
}

/* 
    METODOS .indexOf(), .lastIndexOf() y .slice()

    Para buscar un valor específico, los arrays proporcionan un método indexOf
    (“indice de”). Este busca a través del array desde el principio hasta el final
    y retorna el índice en el que se encontró el valor solicitado—o -1 si este no
    fue encontrado. Para buscar desde el final en lugar del inicio, hay un método
    similar llamado lastIndexOf (“ultimo indice de”).
    console.log([1, 2, 3, 2, 1].indexOf(2));
    // → 1
    console.log([1, 2, 3, 2, 1].lastIndexOf(2));
    // → 3

    Tanto indexOf como lastIndexOf toman un segundo argumento opcional que
    indica dónde comenzar la búsqueda.
    Otro método fundamental de array es slice (“rebanar”), que toma índices
    de inicio y fin y retorna un array que solo tiene los elementos entre ellos. El
    índice de inicio es inclusivo, el índice final es exclusivo.
    console.log([0, 1, 2, 3, 4].slice(2, 4));
    // → [2, 3]
    console.log([0, 1, 2, 3, 4].slice(2));
    // → [2, 3, 4]
    Cuando no se proporcione el índice final, slice tomará todos los elementos
    después del índice de inicio. También puedes omitir el índice de inicio para
    copiar todo el array.
*/

/* 
    METODO .concat()

    El método concat (“concatenar”) se puede usar para unir arrays y asi crear
    un nuevo array, similar a lo que hace el operador + para los strings.
    El siguiente ejemplo muestra tanto concat como slice en acción. Toma un
    array y un índice, y retorna un nuevo array que es una copia del array original
    pero eliminando al elemento en el índice dado:
    function remover(array, indice) {
    return array.slice(0, indice)
    .concat(array.slice(indice + 1));
    }
    console.log(remover(["a", "b", "c", "d", "e"], 2));
    // → ["a", "b", "d", "e"]

    Si a concat le pasas un argumento que no es un array, ese valor sera agregado
    al nuevo array como si este fuera un array de un solo elemento.
*/

/* 
    STRINGS Y SUS PROPIEDADES

    Podemos leer propiedades como length y toUpperCase de valores string. Pero
    si intentas agregar una nueva propiedad, esta no se mantiene.
    let kim = "Kim";
    kim.edad = 88;
    console.log(kim.edad);
    // → undefined
    Los valores de tipo string, número, y Booleano no son objetos, y aunque
    el lenguaje no se queja si intentas establecer nuevas propiedades en ellos, en
    realidad no almacena esas propiedades. Como se mencionó antes, tales valores
    son inmutables y no pueden ser cambiados.

    Una diferencia es que el indexOf de un string puede buscar por un string que
    contenga más de un carácter, mientras que el método correspondiente al array
    solo busca por un elemento único.
    console.log("uno dos tres".indexOf("tres"));
    // → 8

    El método trim (“recortar”) elimina los espacios en blanco (espacios, saltos
    de linea, tabulaciones y caracteres similares) del inicio y final de un string.
    console.log(" okey \n ".trim());
    // → okey

    La función alcocharConCeros del capítulo anterior también existe como un
    método. Se llama padStart (“alcohar inicio”) y toma la longitud deseada y el
    carácter de relleno como argumentos.
    console.log(String(6).padStart(3, "0"));
    // → 006
    
    Se puede repetir un string con el método repeat (“repetir”), el cual crea un
    nuevo string que contiene múltiples copias concatenadas del string original.
    console.log("LA".repeat(3));
    // → LALALA
*/

/* 
    PARAMETROS RESTANTES

    Puede ser útil para una función aceptar cualquier cantidad de argumentos. Por
    ejemplo, Math.max calcula el máximo de todos los argumentos que le son dados.
    Para escribir tal función, pones tres puntos antes del ultimo parámetro de la
    función, asi:
    function maximo(...numeros) {
    77
    let resultado = -Infinity;
    for (let numero of numeros) {
    if (numero > resultado) resultado = numero;
    }
    return resultado;
    }
    console.log(maximo(4, 1, 9, -2));
    // → 9

    Esto “extiende” al array en la llamada de la función, pasando sus elementos
    como argumentos separados. Es posible incluir un array de esa manera, junto
    con otros argumentos, como en max(9, ...numeros, 2).
    La notación de corchetes para crear arrays permite al operador de tres-puntos
    extender otro array en el nuevo array:
    Square bracket array notation similarly allows the triple-dot operator to
    spread another array into the new array:
    let palabras = ["nunca", "entenderas"];
    console.log(["tu", ...palabras, "completamente"]);
    // → ["tu", "nunca", "entenderas", "completamente"]
*/

/* 
    JSON

    Ya que las propiedades solo agarran su valor, en lugar de contenerlo, los objetos
    y arrays se almacenan en la memoria de la computadora como secuencias de bits
    que contienen las direcciónes—el lugar en la memoria—de sus contenidos. Asi
    que un array con otro array dentro de el consiste en (al menos) una región de
    memoria para el array interno, y otra para el array externo, que contiene (entre
    otras cosas) un número binario que representa la posición del array interno.
    Si deseas guardar datos en un archivo para más tarde, o para enviarlo a otra
    computadora a través de la red, tienes que convertir de alguna manera estos
    enredos de direcciones de memoria a una descripción que se puede almacenar o
    enviar. Supongo, que podrías enviar toda la memoria de tu computadora junto
    con la dirección del valor que te interesa, pero ese no parece el mejor enfoque.
    Lo que podemos hacer es serializar los datos. Eso significa que son convertidos a una descripción plana. Un formato de serialización popular llamado
    JSON (pronunciado “Jason”), que significa JavaScript Object Notation (“Notación de Objetos JavaScript”). Es ampliamente utilizado como un formato de
    almacenamiento y comunicación de datos en la Web, incluso en otros lenguajes
    diferentes a JavaScript.
    JSON es similar a la forma en que JavaScript escribe arrays y objetos, con
    algunas restricciones. Todos los nombres de propiedad deben estar rodeados por
    81
    comillas dobles, y solo se permiten expresiones de datos simples—sin llamadas a
    función, vinculaciones o cualquier otra cosa que involucre computaciones reales.
    Los comentarios no están permitidos en JSON.
    Una entrada de diario podria verse así cuando se representa como datos
    JSON:
        {
            "ardilla": false,
            "eventos": ["trabajo", "toque un arbol", "pizza", "sali a correr"]
        }
    JavaScript nos da las funciones JSON.stringify y JSON.parse para convertir
    datos hacia y desde este formato. El primero toma un valor en JavaScript y
    retorna un string codificado en JSON. La segunda toma un string como ese y
    lo convierte al valor que este codifica.

    let string = JSON.stringify({ardilla: false, eventos: ["fin de semana"]});
    console.log(string);
    // → {"ardilla":false,"eventos":["fin de semana"]}
    console.log(JSON.parse(string).eventos);
    // → ["fin de semana"]
*/

/* 
  UNA LISTA

  Los objetos, como conjuntos genéricos de valores, se pueden usar para construir
  todo tipo de estructuras de datos. Una estructura de datos común es la lista
  (no confundir con un array). Una lista es un conjunto anidado de objetos, con
  el primer objeto conteniendo una referencia al segundo, el segundo al tercero,
  y así sucesivamente.
  let lista = {
    valor: 1,
    resto: {
      valor: 2,
      resto: {
        valor: 3,
        resto: null
    }
    }
  };
  Algo bueno de las listas es que pueden compartir partes de su estructura. Por
  ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} y {valor: -1,
  resto: lista} (con lista refiriéndose a la vinculación definida anteriormente),
  ambos son listas independientes, pero comparten la estructura que conforma
  sus últimos tres elementos. La lista original también sigue siendo una lista
  válida de tres elementos.

*/

/* 
    RESUMEN

    Los objetos y arrays (que son un tipo específico de objeto) proporcionan formas
    de agrupar varios valores en un solo valor. Conceptualmente, esto nos permite
    poner un montón de cosas relacionadas en un bolso y correr alredor con el bolso,
    en lugar de envolver nuestros brazos alrededor de todas las cosas individuales,
    tratando de aferrarnos a ellas por separado.
    La mayoría de los valores en JavaScript tienen propiedades, las excepciones
    son null y undefined. Se accede a las propiedades usando valor.propiedad o
    valor["propiedad"]. Los objetos tienden a usar nombres para sus propiedades
    y almacenar más o menos un conjunto fijo de ellos. Los arrays, por el otro lado,
    generalmente contienen cantidades variables de valores conceptualmente idénticos y usa números (comenzando desde 0) como los nombres de sus propiedades.
    Hay algunas propiedades con nombre en los arrays, como length y un numero
    de metodos. Los métodos son funciones que viven en propiedades y (por lo
    general) actuan sobre el valor del que son una propiedad.
*/

// EJERCICIOS

function rango(inicio, final, paso = inicio < final ? 1 : -1) {
  let array = [];

  if (paso > 0) {
    for (let i = inicio; i <= final; i += paso) array.push(i);
  } else {
    for (let i = inicio; i >= final; i += paso) array.push(i);
  }

  return array;
}

// console.log(rango(5, 2, -1));

function suma(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

//console.log(suma(rango(1,10)))

// REVIRTIENDO UN ARRAY DEVOLVIENDO NUEVO ARRAY
function revertirLista(lista) {
  const longitud = lista.length;
  const nuevaLista = []
  for (let i = 0; i < longitud; i++) {
    nuevaLista.push(lista.pop())    
  }
  return nuevaLista
}

// REVIRTIENDO EL ARRAY ORIGINAL
// Mi solucion
function revertirListaOriginal(lista){
  const longitud = lista.length;
  let inicio = 2, final = 1;
  for (let i = 0; i < longitud; i++) {
    lista.push(...lista.slice(longitud - inicio, longitud - final))
    inicio++
    final++
  }
  for (let i = 0; i < (longitud - 1); i++) lista.shift()
  return lista  
}

// Solucion del libro
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

// De array a lista
function arrayALista(array){
  let lista = null

  for (let i = array.length -1; i >= 0; i--) {
    lista = {valor: array[i], resto: lista }
  }

  return lista
}

// De lista a array
function listaAArray(lista){
  let array = [];
  let contador = 0;
  for (let nodo = lista; nodo; nodo = nodo.resto) {
    contador++
    array.push(nodo.valor);
  }
  return array;
}

// console.log(listaAArray({
//   valor: 1,
//   resto: {
//     valor: 2,
//       resto: {
//         valor: 3,
//         resto: null
//     }
//   }
// }))

function preceder(valor, lista) {
  // My solution
  // let array = listaAArray(lista)
  // array.unshift(elemento)
  // let nuevaLista = arrayALista(array)

  // return nuevaLista

  // Book solution
  return {valor, resto: lista}
}

// Mi solucion
function posicion(numero, lista) {
  if(!lista) return undefined;
  let contador = 0;
  for (let nodo = lista; nodo; nodo = nodo.resto) {
    if(nodo.valor === numero) return contador
    contador++
  }
}
// Book solution
function nth(lista, numero) {
  if (!lista) return undefined;
  else if (numero == 0) return lista.valor;
  else return nth(lista.resto, numero - 1);
}
// console.log(nth(arrayALista([10,20,30]), 2))

function igualdadProfunda(valor1, valor2) {
  // Reviso que los tipos de ambos valores sean iguales
  if(typeof valor1 !== typeof valor2) return false
  // Reviso que el valor de ambos sea igual
  if(valor1 != valor2) return false
  if(typeof valor1 === "object" && typeof valor2 === "object") {
    if ((valor1 === null && valor2 !== null) || (valor1 === null && valor2 !== null)) {
      return false
    } else if(Object.keys(valor1) != Object.keys(valor2)) {
      return false
    } else if(Object.keys(valor1) == Object.keys(valor2)) {
      return true
    }
  }
  return true
}

function deepEqual(a, b) {
  // Tecnicamente resume mis 2 primeras instrucciones. Se suponia que no se podia usar el === y que habia que usar obligatoriamente
  // el typeof. Engaña pichanga de parte del libro.
  // Basicamente con esto revisamos cualquier valor que corresponda a tipos de datos primitivos.
  if (a === b) return true;
  
  // A partir de aquí vamos a revisar datos compuestos o datos equivalentes a objetos como el null

  // 1- Revisamos si "a" es igual a null
  // 2- Revisamos si "a" es un objeto
  // 3- Revisamos si "b" es igual a null
  // 4- Revisamos si "b" es un objeto

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  // Hasta acá yo tenia todo contemplado. Mi confusión comienza a partir de aquí.
    
  let keysA = Object.keys(a), keysB = Object.keys(b);

  // Lo que hizo el libro fue guardar los arrays de keys en variables para poder iterarlas. Como comparar 2 arrays siempre va a dar
  // falso ya que son objetos y estos nunca son iguales salvo que provengan de la misma vinculacion, lo que hará es recorrer
  // los arreglos para iterar sobre las posciones las cuales poseen tipos de datos primitivos que si son comparables con el ==

  // Lo primero que hace acá para descartar rápidamente una igualdad entre 2 arreglos es contrastar sus longitudes. Simple!
  if (keysA.length != keysB.length) return false;

  // Y ahora si... recorre el arreglo A y revisa si el arreglo B no tiene algunas de las propiedades del arrelgo B. 
  // Si se llego a esta instancia es por que tienen la misma cantidad de propiedades, faltaba nomas saber si esas propiedades
  // son las mismas o no.  
  // Finalmente en revisa, en caso de que las propiedades sean las mismas, que los valores tambien lo sean.

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(deepEqual({nombre: 'Jorge'}, {apellido: 'Jorge'}))

/* 
  Nota:

  Aún cuesta bastante esto de la recursividad insertada en ejercicios genéricos y hay muchos conceptos de tipos que aún no reconozco
  naturalemente. Los recorridos de arreglo a objeto y viceversa me siguen mareando bastante. 
  Si bien entiendo lo que leo y me doy más o menos una idea mental de como los datos van recorriendo el algoritmo aún no es natural
  y pleno.
  Mis prácticas para resolver la mayoria de los ejercicios siguen siendo básicas, verbosas y poco óptimas. En algunos casos 
  inservibles.

  Recordatorio para el siguiente capítulo:
  
  Tenete paciencia. Empezá por absorber los conceptos y las buenas prácticas. Volvé a ellas cuando te encuentres con un problema 
  similar. Si logras reconocer el patrón y enlazarlo mentalmente con algo visto previamente en el libro ya hiciste un progreso.

  Ánimos!

*/