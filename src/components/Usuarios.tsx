
import { reqResApi } from '../api/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';
import { ReqRespListado, Usuario } from '../interfaces/reqResInterfaces';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <th><img src={usuario.avatar} alt={usuario.first_name} style={{ width: 50, borderRadius: 100 }} /></th>
                <th>{usuario.first_name}{usuario.last_name}</th>
                <th>{usuario.email}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => renderItem(usuario))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}>
                Anteriores
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                Siguientes
            </button>
        </>
    )
}
