import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()


router.get('/', (_req, res) => {
    /* res.send('Fetching all entry diaries.') */
    res.send(diaryServices.getEntriesWithoutSensitiveInfo()) //Typescript no funciona en runtime, nos muestra la info sensible que no queremos que mueste. Hemos de hacer algun cambio.
})

router.get('/:id', (req, res) => {
    //const entry = diaryServices.findById(req.params.id) // Usamos el (req.params.id) x q el parametro id lo pasamos en el get
    const diary = diaryServices.findById(+req.params.id)  // Como el (req.params.id) siempre viene en string lo debemos pasar a number x q así lo decidimos anteriormente. Se puede hader de dos formas 1- (Number(req.params.id)) 2- "Con área operator" -> (+req.params.id) .
    //Podemos hacer una ternaria:
    return diary // o return (diary != null) {...? ...: ... etc}
    ? res.send(diary)
    : res.sendStatus(404) 
    //Hasta aquí nos devuelve el diary pero muestra el comentario que queremos no muestre si ponemos el NonSensitive... Lo solucionamos en el services/diaryServices.ts
})

router.post('/', (req, res) => {
    /* res.send('Saving a diary') */
    /* const { date, weather, visibility, comment } = req.body

    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
    }) //Pasamos un objeto como parametro 

    res.json(newDiaryEntry)*/ // -> Omitimos esta forma por que al hacer el post el tipo enviado de datos es any y queremos que se envien en el formato que desamos.

    try {
        /* const { date, weather, visibility, comment } = req.body */ //-> Lo quitamos al añanadir const newDiaryEntry = toNewDiaryEntry(req.body)

        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry) 

        res.json(addedDiaryEntry)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/:id', (req, res) => {
    
    try {
        const id = Number(req.params.id)
        const deletedDiary = diaryServices.deleteDiary(id)

        res.json(deletedDiary)

    } catch (e) {
        res.status(400).send(e)
    }
})

/* router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const diary = diaryEntries.filter(diary => diary.id != id)

    return diary ? res.send(diary) : res.sendStatus(404)
}) */

/* router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    diaryEntries.splice(id, 1)
    console.log(diaryEntries);
    res.sendStatus(200)
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
}) */

export default router