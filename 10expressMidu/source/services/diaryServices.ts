import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'
/*import diaryData from './diaries' --> Este no lo usariamos al haber creado el diaries.ts*/

/* const diaries: Array<DiaryEntry> = diaryData  as Array<DiaryEntry>  lo quitamos al usar el diaries.ts ya que ahí se indica el tipo del array*/
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): Array<DiaryEntry> => diaries

/* export const findById = (id: number): DiaryEntry => {
    const entry = diaries.find(diary => diary.id === id) //Nos devuelve un undefined por lo que hemos de hacer un cambio.
    return entry
} */

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(diary => diary.id === id) //Nos devuelve un undefined por lo que hemos de hacer un cambio.
    // return entry -> //Hasta aquí nos devuelve el diary pero muestra el comentario que queremos no muestre si ponemos el NonSensitive... Lo solucionamos:
    if (entry != null) {
        const { comment, ...restOfDiary } = entry //Hacemos destructuring y cogemos la parte que nos interesa
        return restOfDiary
    }
    return undefined
}

//export const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoDiaryEntry> => diaries /* Ejemplo de tipo de utilidad (pick y omit) para ver como añadir o quitar propiedados que queremos sean mostradas o no del array de objetos */
// en la linea superior cuando la utilizamos nos muestra la info sensible por lo que tenemos que hacer un map:
export const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoDiaryEntry> => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

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

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const calculoId = Math.max(... diaries.map(d => d.id))
    const id = calculoId < 1 ? 0 : calculoId

    const newDiary = {
        id: id + 1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}

/* const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
diariesWithoutSensitiveInfo[0].comment ---> Dice que el comentario no existe por el tipo que hemos creado sin él. */

export const deleteDiary = (id: number) => {
    diaries.splice(id, 1)
    return diaries
}