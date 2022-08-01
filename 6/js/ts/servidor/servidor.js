"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const servidor = express();
const puerto = 3025;
const fs = require('fs');
const https = require('https');
servidor.listen(puerto, function () {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
    /* console.log(__dirname); */
});
servidor.get('/inicio', function (req, res) {
    /* console.log('Se recibió una petición get.'); */
    /* res.send('Hola estás en la página inicial.'); */
    /* res.sendFile(path.join("./index.html")); */
    res.sendFile('index.html', { root: '/' });
    /* res.sendFile(path.join(__dirname + "/index.html")); */
});
servidor.get('/caracteristicas', function (req, res) {
    res.send('Hola estás en la página de caracteristicas');
});
//Creando un servidor seguro https:
/* https.createServer({
    cert: fs.readFileSync('mi_certificado.crt'),
    key: fs.readFileSync('mi_certificado.key')
}, servidor).listen(puerto, function(){
    console.log('Servidor https corriendo en el puerto 3025');
}) */
