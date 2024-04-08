/*********** ESTRUCTURA DEL PROGRAMA *************/

// Un fragmento de codigo que produce un valor se denomina EXPRESION

// Una oracion completa en JavaScript se denomina DECLARACION

// Las variables también son denominadas vinculos o bind (vinuclacion, binding)

// La colección de vinculaciones y sus valores que existen en un momento dado se llama entorno.

/* 
    Ejemplo util de Do While

    let tuNombre;
    do {
        tuNombre = prompt("Quien eres?");
    } while (!tuNombre);
    console.log(tuNombre);                                                  
*/

// Ejercicio del triangulo
function fabricarTriangulo(num) {

    let escalon = ""

    for (let i = 0; i < num; i++) {
        escalon += "#"
        console.log(escalon)
    }        
}

// Ejercicio del tablero de ajedrez
function fabricarTableroDeAjedrez(dimension) {
    const celdaBlanca = " ",
        celdaNegra = "#",
        saltarFila = "\n"
    let tablero = ""

    for (let i = 0; i < dimension/2; i++) {
        for (let j = 0; j < dimension/2; j++) {
            tablero = tablero + celdaBlanca + celdaNegra
        }
        tablero = tablero + "\n"
        for (let k = 0; k < dimension/2; k++) {
            tablero = tablero + celdaNegra + celdaBlanca
        }
        tablero = tablero + saltarFila
    }
    console.log(tablero)
}

// Mejor solucion al tablero de ajdrez
function fabricarMejorTablero(dimension) {
    var board = "",
        nextRow = "\n";

    const recorrerColumnaDelTablero = () => {
        for(var col = 0; col < dimension; col++){
            recorrerFilaDelTablero(col)
            board += nextRow;
        }
    }
    
    const recorrerFilaDelTablero = (col) => {
        for(var row = 0; row < dimension; row++){
            board += (row % 2) == (col % 2) ? " " : "#";
        }
    }
    recorrerColumnaDelTablero()
    console.log(board)
}
