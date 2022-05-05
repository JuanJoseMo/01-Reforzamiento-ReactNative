import React from 'react'

export const TiposBasicos = () => {
    /*
    let nombre="Juanjo";
    nombre = 123;
    De esta forma con let conseguimos crear una variable que despues no puede pasar a ser number.
    De tipo explícito es de la siguiente forma:
    let nombre:string = "Juanjo";
    Si queremos que sea ambas cosas podemos hacer un let nombre:string | number ="Juanjo";
    Para crear una constante solamente debemos utilizar const.
    */
    let nombre: string = "Juanjo";
    const edad: number = 22;
    /*
    La edad siempre va a ser 22.
    edad=123; no funciona.
    */
    const estaActivo = true;
    /*
    Siempre va a estar a true. Si queremos que cambie tenemos que declararla como const estaActivo:boolean=true; 
    / No se puede imprimir directamente.
    */
    const poderes = ["Velocidad", "Volar", "Respirar bajo agua"];
    //Si sabes que el array va a ser solo de string mejor será definirlo como const poderes:string[]=[];
    //Si se utiliza const poderes: any[]=[]; el array podrá meter lo que quiera.
    return (
        <>
            <h3>Tipos Básicos</h3>
            {/*Utilizamos un ternario para saber el estado del boolean. */}
            {nombre}, {edad},{(estaActivo) ? ' Activo' : ' No activo'}
            <br />
            {poderes.join(', ')
            /*De esta forma coseguimos que se muestre el array y cada uno de sus elementos separados por comas.
            Para insertar en el array utilizaremos poderes.push("Nuevo poder añadido") o poderes.push(69). */}
        </>
    )
}
