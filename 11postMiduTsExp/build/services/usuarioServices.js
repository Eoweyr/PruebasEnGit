"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localizarUsuario = exports.recibirUsuarios = void 0;
//import { listaUsuarioComponent } from '../components/listaUsuariosComponent'
const usuarios_json_1 = __importDefault(require("../db/usuarios.json"));
const usuarios = usuarios_json_1.default;
const recibirUsuarios = () => usuarios;
exports.recibirUsuarios = recibirUsuarios;
const localizarUsuario = (id) => {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario != null) {
        return usuario;
    }
    return undefined;
};
exports.localizarUsuario = localizarUsuario;
