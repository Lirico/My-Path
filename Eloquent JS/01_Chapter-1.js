/*********** VALORES, TIPOS Y OPERADORES *************/

/*
    Los Bits

    Los bits son cualquier tipo de cosa que pueda tener dos valores, usualmente descritos 
    como ceros y unos. Dentro de la computadora, estos toman formas tales como cargas 
    eléctricas altas o bajas, una señal fuerte o débil, o un punto brillante u opaco en 
    la superficie de un CD. Cualquier pedazo de información discreta puede ser reducida a 
    una secuencia de ceros y unos y, de esa manera ser representada en bits.

     0   0   0   0    1   1   0   1
    128  64  32  16   8   4   2   1

    Entonces ese es el número binario 00001101, o 8 + 4 + 1, o 13.
*/

/* 
    ¿Qué cantidad de Bits utiliza JavaScript?

    JavaScript utiliza un número fijo de bits, específicamente 64 de ellos, para almacenar un solo valor numérico. 
    Solo existen una cantidad finita de patrones que podemos crear con 64 bits, lo que significa que la cantidad de 
    números diferentes que pueden ser representados es limitada. Para una cantidad de N dígitos decimales, la 
    cantidad de números que pueden ser representados es 10N. Del mismo modo, dados 64 dígitos binarios, podemos 
    representar 264 números diferentes, lo que es alrededor de 18 trillones (un 18 con 18 ceros más). 
    Eso es muchísimo. 

    No todos los números enteros por debajo de 18 trillones caben en un número de JavaScript. Esos bits también 
    almacenan números negativos, por lo que un bit indica el signo de un número. Algunos de los bits son usados para 
    almacenar la posición del punto decimal. El número entero mas grande que puede ser almacenado está en el rango 
    de los nueve mil billones (15 ceros), que sigue siendo inmenso.

    Para números muy grandes o muy pequeños, pudiéramos también usar notación científica agregando una e 
    (de “exponente”), seguida por el exponente del número:

    2.998e8
*/

/* 
    Numeros Especiales

    Existen 3 valores especiales en JavaScript que son considerados números pero que no se comportan como números 
    normales.

    Los primeros dos son Infinity y -Infinity, los cuales representan las infinidades positivas y negativas. 
    Infinity - 1 aun es Infinity, y asi sucesivamente. A pesar de esto, no confíes mucho en computaciones que 
    dependan de infinidades. Estas no son matemáticamente confiables, y puede que muy rápidamente nos resulten 
    en el próximo número especial: NaN.

    NaN significa “no es un número” (“Not A Number”), aunque sea un valor del tipo numérico. Obtendras este 
    resultado cuando, por ejemplo, trates de calcular 0 / 0 (cero dividido entre cero), Infinity - Infinity, 
    o cualquier otra cantidad de operaciones numéricas que no produzcan un resultado significante.
*/

/////////////////////////////////////////////////

/* 
  Strings
  
  Para hacer "Newlines" (saltos de linea) debemos utilizar \n dentro de la cadena de texto.
  Usamos barra contrainvertida.
*/

console.log("Esta es la primera linea\nY esta es la segunda")

/* 
    El texto actual es este:

    Esta es la primera linea
    Y esta es la segunda
*/

/////////////////////////////

/* 
  Operadores Unarios
  
  No todo los operadores son simbolos. Algunos se escriben como palabras. Un ejemplo es el operador typeof, 
  que produce un string con el nombre del tipo de valor que le demos.
*/

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

////////////////////////////////////

/* 
  Operadores de comapracion
  
  Los Strings pueden ser comparados de la misma forma.
*/

console.log("Aardvark" < "Zoroaster") // true

/* 
  La forma en la que los strings son ordenados, es aproximadamente alfabético, aunque no realmente de la misma 
  forma que esperaríamos ver en un diccionario: las letras mayúsculas son siempre “menores que” las letras 
  minúsculas, así que "Z" < "a", y caracteres no alfabéticos (como !, - y demás) son también incluidos en el 
  ordenamiento. Cuando comparamos strings, JavaScript evalúa los caracteres de izquierda a derecha, comparando 
  los códigos Unicode uno por uno.

  Solo hay un valor en JavaScript que no es igual a si mismo, y este es NaN (“no es un número”).
*/