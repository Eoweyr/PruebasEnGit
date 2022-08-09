"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routerUsuarios = express_1.default.Router();
routerUsuarios.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname + '../../../build/components/listaUsuariosComponent.html'));
    res.send('<lista-usuarios></lista-usuarios>');
});
exports.default = routerUsuarios;
