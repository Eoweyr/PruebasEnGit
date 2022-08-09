const mongoose = require('mongoose')
//const createDomPurify = require('dompurify') // lo uitilizamos para eviatr que en los inputs el usuario introduzca código malicioso.
//const { JSDOM } = require('jsdom') // lo uitilizamos para eviatr que en los inputs el usuario introduzca código malicioso.
//const dompurify = createDomPurify(new JSDOM().window)
//const marked = require('marked')

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    contrasenya: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    }/* ,
    sanitizedHtml: {
        type: String,
        required: true
    } */
})

/* usuarioSchema.pre('validate', function(next) {
    if(this.comentario) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.comentario))
    }
    next()
}) */

module.exports = mongoose.model('Usuario', usuarioSchema)