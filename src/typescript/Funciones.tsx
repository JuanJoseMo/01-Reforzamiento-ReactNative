import React from 'react'

export const Funciones = () => {
    //Funciones es un función que tiene un valor de retorno, ese valor de retorno es el que va despues de =>
    //Es decir, el valor de retorno ese JSX.Element, que esto es básicamente Javascript con HTML.

    /*Esto es una función, si no tiene return devuelve void.
    Si se le quiere decir el parámetro que tiene que devolver se puede poner:
    const sumar=():number=>{}
    Si tienes que recibir argumentos van a ir dentro de los paréntesis.
    */

    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(3, 4)}</span>
        </>
    )
}
