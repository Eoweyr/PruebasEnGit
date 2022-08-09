
import express from 'express'
import path from 'path'

const routerUsuarios = express.Router()

routerUsuarios.get('/', (_req: any, res: any) => {
    res.sendFile(path.join(__dirname+'../../../views/components/listaUsuariosComponent.html'))
})

export default routerUsuarios