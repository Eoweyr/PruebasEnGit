/* import express from 'express'
import * as usuarioServices from '../services/usuarioServices'

const routerUsuarios = express.Router()

routerUsuarios.get('/', (_req, res) => {
    res.send(usuarioServices.recibirUsuarios())    
})

routerUsuarios.get('/:id', (req, res) => {
    const usuario = usuarioServices.localizarUsuario(+req.params.id)
    return usuario ? res.send(usuario) : res.sendStatus(404)
})

export default routerUsuarios */


