import { NewDiaryEntry, Weather, Visibility } from "./types";

//En este archivo vamos a realizar una validación de los datos introducidos por el usuario.

const parseComment = (commentFromRequest: any): string => {
    /* if (typeof commentFromRequest != 'string') {
        throw new Error('Incorrect or missing comment'); 
    } */ // -> Al crear abajo el isString modificamos este if, ya que el código del isString será reutilizable.

    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}



const isString = (string: string): boolean => {
    return typeof string === 'string' /* || String instanceof string */ // -> La parte de la derecha la utilizariamos para un mayor control, ya que hay dos formas de crear los strings.
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
    /* return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(string) */ // -> se puede utilizar pero dado que no sería correcto porque si cambiamos el typo Weader nos daría muchos problemas, vamos a crear un enum en types.ts para poder reutilizar el código.
    return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}


const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newEntry
}

export default toNewDiaryEntry
