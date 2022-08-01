"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const servidor = express();
const fs = require('fs');
const puerto = 3030;
servidor.listen(puerto, function () {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
servidor.get('/inicio', function (req, res) {
    res.send('<inicio-componente></inicio-componente><script src="./componentes/inicioComp.js"></script>');
});
