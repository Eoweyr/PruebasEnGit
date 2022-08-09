//import { listaUsuarioComponent } from '../components/listaUsuariosComponent'
import usuarioData from '../db/usuarios.json'
import { Usuario } from './interfaces'

const usuarios: Array<Usuario> = usuarioData as Array<Usuario>

export const recibirUsuarios = (): Array<Usuario> => usuarios

export const localizarUsuario = (id: number): Usuario | undefined => {
    const usuario = usuarios.find(u => u.id === id)
    if (usuario != null) {
        return usuario
    }
    return undefined
}