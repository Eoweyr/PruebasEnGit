
import * as path from "path";

const express = require('express');
const servidor = express();
const fs = require('fs');

const puerto = 3030;

servidor.listen(puerto, function(){
    console.log(`Servidor corriendo en el puerto ${puerto}`);
})

servidor.get('/inicio', function(req: any, res: any) {

    res.send('<inicio-componente></inicio-componente>');
    res.send('<script src="./componentes/inicioComp.js"></script>');
})