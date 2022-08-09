const express = require('express')
const Usuario = require('../models/usuario')
const routerUsuarios = express.Router()



routerUsuarios.get('/nuevo', (req, res) => {
    res.render('usuarios/nuevo', {usuario: new Usuario})
})

routerUsuarios.get('/editar/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.render('usuarios/editar', {usuario: usuario})
})

routerUsuarios.get('/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    if(usuario == null) res.redirect('/')
    res.render('usuarios/detalle', {usuario: usuario})
})

routerUsuarios.post('/', async (req, res) => {
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contrasenya: req.body.contrasenya,
        comentario: req.body.comentario
    })
    try {
        usuario = await usuario.save()
        res.redirect(`/usuarios/${usuario.id}`)
    } catch (e) {
        console.log(e)
        res.render(`/usuarios/nuevo`, {usuario: usuario})
    }
})

/* routerUsuarios.post('/', async (req, res, next) => {
    req.usuario = new Usuario()
    next()
}, saveUsuarioAndRedirect('nuevo'))

routerUsuarios.put('/:id', async (req, res, next) => {
    req.usuario = await Usuario.findById(req.params.id)
    next()
}, saveUsuarioAndRedirect('editar')) */

routerUsuarios.delete('/:id', async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.redirect('/usuarios')
})



module.exports = routerUsuarios