import React, { useState } from 'react'

export const useFormulario = <T extends Object>(formulario: T) => {
    const [state, setState] = useState(formulario)
    const onChange = (value: string, campo: keyof T) => {
        setState({
            ...state, //Desestructuración de formulario para acceder al valor que tenga.
            [campo]: value,//Se esta computando el valor es decir, se esta cambiando el valor test@test.com por el valor de campo.
        });

    }
    return {
        ...state,
        formulario: state,
        onChange,
    }
}
