const express = require('express')
const routerUsuarios = require('./routes/usuarios')
const app = express()
const mongoose = require('mongoose')
const Usuario = require('./models/usuario')
const methodOverride = require('method-override')
const port = 3005

mongoose.connect('mongodb://localhost/usuarios', {
    useUnifiedTopology: true, useNewUrlParser: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

app.get('/usuarios', async (req, res) => {
    //res.send('Hello world')
    /* const usuarios = [{
        id: '0',
        nombre: 'Rebeca',
        apellido: 'Lloret',
        contrasenya: '1234'
    },
    {
        id: '1',
        nombre: 'Rebeca',
        apellido: 'Lloret',
        contrasenya: '1234'
    },
    {
        id: '2',
        nombre: 'Salva',
        apellido: 'Gallego',
        contrasenya: '1234'
    },
    {
        id: '3',
        nombre: 'Buba',
        apellido: 'Lloret',
        contrasenya: '1234'
    }] */

    const usuarios = await Usuario.find().sort({nombre: 'desc'})
    res.render('/usuarios/index', { usuarios: usuarios })
})

app.use('usuarios', routerUsuarios)

app.listen(port)

