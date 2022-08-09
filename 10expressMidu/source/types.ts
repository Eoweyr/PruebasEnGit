/* export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy' */ //--> Lo quitamos tras crear el enum, ya que el enum tambien sirve para crear tipos.
/* export type Visibility = 'great' | 'good' | 'ok' | 'poor' */ //--> Quitamos el formato del archivo d.ts y lo dejamos en .ts ya que al cambiar

export enum Weather { //Creamos el enum para poder parsear el weather bien y poder reutilizar código. Se utiliza el enum cuando conocemos los elementos y son finitos.
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
} 

export enum Visibility { //Los enum, entre otras cosas, sirven para crear tipos y validarlos. Por eso anulamos los tipos de arriba.
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

/* export interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
} */

/* export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> ---> Ejemplo de tipo de utilidad pick */
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // Ejemplo de tipo de utilidad omit, el anterior es valido pero para este caso nos conviene más este.

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
