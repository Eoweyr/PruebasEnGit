"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
//En este archivo vamos a realizar una validación de los datos introducidos por el usuario.
const parseComment = (commentFromRequest) => {
    /* if (typeof commentFromRequest != 'string') {
        throw new Error('Incorrect or missing comment');
    } */ // -> Al crear abajo el isString modificamos este if, ya que el código del isString será reutilizable.
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const isString = (string) => {
    return typeof string === 'string'; /* || String instanceof string */ // -> La parte de la derecha la utilizariamos para un mayor control, ya que hay dos formas de crear los strings.
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    /* return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(string) */ // -> se puede utilizar pero dado que no sería correcto porque si cambiamos el typo Weader nos daría muchos problemas, vamos a crear un enum en types.ts para poder reutilizar el código.
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
