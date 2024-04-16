/*********** FUNCIONES *************/

/* 
    FUNCIONE

    Esto nos da una forma de estructurar programas más grandes, de reducir la
    repetición, de asociar nombres con subprogramas y de aislar estos subprogramas
    unos con otros.
    La aplicación más obvia de las funciones es definir nuevo vocabulario. Crear
    nuevas palabras en la prosa suele ser un mal estilo. Pero en la programación,
    es indispensable.
    El vocabulario que está disponible tiende a ser
    más precisamente definido, y por lo tanto menos flexible, que en el lenguaje
    humano. Por lo tanto, nosotros por lo general tenemos que introducir nuevos
    conceptos para evitar repetirnos demasiado.
*/

/* 
    SCOPE

    cada alcance local puede ver también todos los alcances locales
    que lo contengan. El conjunto de vinculaciones visibles dentro de un bloque
    está determinado por el lugar de ese bloque en el texto del programa. Cada
    alcance local puede tambien ver todos los alcances locales que lo contengan, y
    todos los alcances pueden ver el alcance global. Este enfoque para la visibilidad
    de vinculaciones es llamado ALCANCE LEXICO.
*/

/* 
    CIERRE (closures)

    La capacidad de tratar a las funciones como valores, combinado con el hecho de que las vinculaciones locales se vuelven a crear cada vez que una sea
    función es llamada, trae a la luz una pregunta interesante. Qué sucede con
    las vinculaciones locales cuando la llamada de función que los creó ya no está
    activa?

*/
/*
    RECURSIVIDAD

    Ejemplo:

    function potencia(base, exponente) {
    if (exponente == 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
    }

    let base = 2
    let exponente = 1

    2 * potencia(2, 3 - 1)
    2 * 2 * potencia(2, 2 - 1)
    2 * 2 * 2 * potencia(2, 1 - 1)
    2 * 2 * 2 * 1
*/
/*
    En este ejemplo de recursividad, ingresamos un dato objetivo. Este es evaluado
    y en caso de entrar al else se lo va o sumando o multiplicando.
    Se empieza sumando y se continua esa secuencia hasta que se alcanza o se pasa
    el numero. Si no se logra alcanzar el numero se reemplaza la suma por la multiplicacion
    y asi una y otra vez hasta que se logra alcanzar el numero de alguna manera.
    No todos los numeros son alcanzables. Ejemplo: 15.
    Para que el sistema pueda entrar a la segunda expresion del OR y bifurcar la operacion
    se programo el else if donde si el numero acumulado excede el valor del objetivo
    este retorne null. De esta forma al entrar en la estructura logica, como dio falsa
    la primera expresion debido al null, esto fuerza al sistema a entrar a la segunda
    expresion del OR que es la multiplicacion.
*/

function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historia} + 5)`) ||
        encontrar(actual * 3, `(${historia} * 3)`)
      );
    }
  }
  return encontrar(1, "1");
}

// console.log(encontrarSolucion(24));

/* 
    Funciones y efectos secundarios

    Las funciones se pueden dividir aproximadamente en aquellas que se llaman
    por su efectos secundarios y aquellas que son llamadas por su valor de retorno.
    La primera función auxiliar en el ejemplo de la granja, imprimirEtiquetaAlcochadaConCeros
    , se llama por su efecto secundario: imprime una línea. La segunda versión,
    alcocharConCeros, se llama por su valor de retorno.
    No es coincidencia que la
    segunda sea útil en más situaciones que la primera. Las funciones que crean
    valores son más fáciles de combinar en nuevas formas que las funciones que
    directamente realizan efectos secundarios.

    Funcion pura

    Una función pura es un tipo específico de función de producción-de-valores
    que no solo no tiene efectos secundarios pero que tampoco depende de los
    efectos secundarios de otro código—por ejemplo, no lee vinculaciones globales
    cuyos valores puedan cambiar
    Una función pura tiene la propiedad agradable
    de que cuando se le llama con los mismos argumentos, siempre produce el
    mismo valor (y no hace nada más).
    Una llamada a tal función puede ser sustituida por su valor de retorno sin 
    cambiar el significado del código.

*/

/* 
    EJERCICIOS
*/

function min(n1, n2) {
  return n1 < n2 ? n1 : n2;
}

function esPar(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  }

  return esPar(num - 2);
}

function contarCaracteres(cadena, caracter){
    if(typeof cadena !== "string"){
        return "El valor ingresado no es una cadena"
    }

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === caracter.toUpperCase()){
            contador += 1
        }
    }    

    return contador
}