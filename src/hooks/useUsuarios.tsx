import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqRespListado, Usuario } from '../interfaces/reqResInterfaces';

export const useUsuarios = () => {
    //Listado de los usuarios donde se va a almacenar los usuarios de la api.
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);


    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();

    }, []);

    const cargarUsuarios = async () => {
        //Llamar a la API https://reqres.in/api/users.
        const resp = await reqResApi.get<ReqRespListado>("/users", { params: { page: paginaRef.current } })
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert("No hay más registros.");
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }
    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }


    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }

}
