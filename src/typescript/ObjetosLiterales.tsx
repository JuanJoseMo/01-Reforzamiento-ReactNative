import React from 'react'
//Persona es un objeto
interface Persona {
    nombreCompleto: string;
    edad: number;
    //Direccion es un objeto
    direccion: Direccion;
}
interface Direccion {
    pais: string;
    casaNo: number;
}
//Si se desea crear un const persona = new Persona(); necesitas crear una class
//Las interfaces solo sirven para poner reglas de validación a los objetos
export const ObjetosLiterales = () => {
    //Objeto en React Native
    /*
    En caso de que una vez que este objeto es creado pero se le quiere añadir más atributos no seria posible,
    para eso tenemos que utilizar la interface.
    Crearemos una interface Persona más arriba.
    */
    const persona: Persona = {
        nombreCompleto: "Juanjo",
        edad: 22,
        direccion: {
            pais: "España",
            casaNo: 38
        }
    }
    //persona.nombreCompleto;
    return (
        <>
            <h3>Objetos Literales</h3>
            {/*Como transformar ese objeto completo para poder visualizarlo pero de forma 'fea'*/}
            {/*{JSON.stringify(persona)}*/}
            {/*Objeto visualizado en formato JSON pero ordenado gracias al null y al 2 de overload*/}
            <code>
                <pre>
                    {
                        JSON.stringify(persona, null, 2)
                        //El null hace que se muestre en JSON completo
                    }
                </pre>
            </code>
        </>
    )
}
