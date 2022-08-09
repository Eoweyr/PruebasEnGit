"use strict";
/* Esta forma es correcta pero es más recomendable trabajar sobre el json por en coste en runtime al tener que pasar de este modo el js
a json y viceversa */
Object.defineProperty(exports, "__esModule", { value: true });
/* Ponemos la barra baja _ en el nombre del archivo para que typescript no lo tenga en cuenta */
/* Esta opción es valida pero preferible la que hemos hecho desde el principio. Solución idilica, si tenemos el json, tener en cuenta tiempo en runtime */
const types_1 = require("../types");
const diaryEntries = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": types_1.Weather.Rainy,
        "visibility": types_1.Visibility.Poor,
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2017-04-01",
        "weather": types_1.Weather.Sunny,
        "visibility": types_1.Visibility.Good,
        "comment": "Everything went better than expected, I'm learning much"
    }
];
exports.default = diaryEntries;
