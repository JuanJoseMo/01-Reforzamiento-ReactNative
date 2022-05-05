import React, { useState } from 'react'

//Esta seria la lógica del contador pasada del contador.tsx para hacer uso en en ContadorConHook.tsx.

export const useContador = (inicial: number = 0) => {
    //De esta forma hacemos que el número por defecto sea 0 y que sea un valor opcional el añadir un valor inicial o no.
    const [valor, setValor] = useState(inicial)
    const acumular = (numero: number) => {
        setValor(valor + numero);
    }
    return {
        valor, acumular
    }
}
