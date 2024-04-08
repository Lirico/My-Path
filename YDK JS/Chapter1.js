/* What is Scope? */

/* 
    Conceptos Importantes:

    Engine (Motor): 
        Responsable de la compilacion de inicio a fin y ejecución de nuestro programa en JavaScript.
    
    Compiler (Compilador):
        Uno de los amigos del Engine; maneja todo el trabajo sucio de análisis y generación de código.

    Scope (Ámbito/Alcance):
        Otro amigo del Engine; recolecta y mantiene una lista de busqueda de todos los identificadores declarados
        (variables), y hace cumplir un estricto set de reglas sobre como (las variables) son accesibles en el
        código actualmente ejecutado.
*/

// Imaginemos que tenemos esta línea de código:
var a = 2;
