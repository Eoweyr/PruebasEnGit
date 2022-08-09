"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
/*import diaryData from './diaries' --> Este no lo usariamos al haber creado el diaries.ts*/
/* const diaries: Array<DiaryEntry> = diaryData  as Array<DiaryEntry>  lo quitamos al usar el diaries.ts ya que ahí se indica el tipo del array*/
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
/* export const findById = (id: number): DiaryEntry => {
    const entry = diaries.find(diary => diary.id === id) //Nos devuelve un undefined por lo que hemos de hacer un cambio.
    return entry
} */
const findById = (id) => {
    const entry = diaries.find(diary => diary.id === id); //Nos devuelve un undefined por lo que hemos de hacer un cambio.
    // return entry -> //Hasta aquí nos devuelve el diary pero muestra el comentario que queremos no muestre si ponemos el NonSensitive... Lo solucionamos:
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]); //Hacemos destructuring y cogemos la parte que nos interesa
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
//export const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoDiaryEntry> => diaries /* Ejemplo de tipo de utilidad (pick y omit) para ver como añadir o quitar propiedados que queremos sean mostradas o no del array de objetos */
// en la linea superior cuando la utilizamos nos muestra la info sensible por lo que tenemos que hacer un map:
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
/* export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
    const newDiaryEntry = {
        //id: diaries.length + 1, // también se podria hacer id: Math.max(... diaries.map(d => d.id)) + 1 -> Esta opción es mejor si los id no son consecutivos por el motivo que sea. Voy a usar esta...
        id: Math.max(... diaries.map(d => d.id)) + 1,
        date,
        weather,
        visibility,
        comment
    }

    diaries.push(newDiaryEntry)
    return newDiaryEntry
} */ //Este modo es correcto pero vamos a reutilizar código por buenas prácticas.
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: Math.max(...diaries.map(d => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
/* const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
diariesWithoutSensitiveInfo[0].comment ---> Dice que el comentario no existe por el tipo que hemos creado sin él. */ 
