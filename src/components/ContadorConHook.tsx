import React from 'react'
import { useState } from 'react';
import { useContador } from '../hooks/useContador';

export const ContadorConHook = () => {

    const { valor, acumular } = useContador();

    return (
        <>
            <h3>Contador con Hook: <small>{valor}</small></h3>
            <button
                className="btn btn-primary"
                onClick={() => acumular(1)}
            >
                +1
            </button>
            &nbsp;
            {/*Sirve para hacer una pequeña separación, es un espacio.*/}
            <button
                className="btn btn-primary"
                onClick={() => acumular(-1)}
            >
                -1
            </button>
        </>
    )
}
