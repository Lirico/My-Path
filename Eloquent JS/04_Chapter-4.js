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