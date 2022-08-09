"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    /* res.send('Fetching all entry diaries.') */
    res.send(diaryServices.getEntriesWithoutSensitiveInfo()); //Typescript no funciona en runtime, nos muestra la info sensible que no queremos que mueste. Hemos de hacer algun cambio.
});
router.get('/:id', (req, res) => {
    //const entry = diaryServices.findById(req.params.id) // Usamos el (req.params.id) x q el parametro id lo pasamos en el get
    const diary = diaryServices.findById(+req.params.id); // Como el (req.params.id) siempre viene en string lo debemos pasar a number x q así lo decidimos anteriormente. Se puede hader de dos formas 1- (Number(req.params.id)) 2- "Con área operator" -> (+req.params.id) .
    //Podemos hacer una ternaria:
    return diary // o return (diary != null) {...? ...: ... etc}
        ? res.send(diary)
        : res.sendStatus(404);
    //Hasta aquí nos devuelve el diary pero muestra el comentario que queremos no muestre si ponemos el NonSensitive... Lo solucionamos en el services/diaryServices.ts
});
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
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = router;
