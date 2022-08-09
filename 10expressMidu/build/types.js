"use strict";
/* export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy' */ //--> Lo quitamos tras crear el enum, ya que el enum tambien sirve para crear tipos.
/* export type Visibility = 'great' | 'good' | 'ok' | 'poor' */ //--> Quitamos el formato del archivo d.ts y lo dejamos en .ts ya que al cambiar
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather = exports.Weather || (exports.Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
