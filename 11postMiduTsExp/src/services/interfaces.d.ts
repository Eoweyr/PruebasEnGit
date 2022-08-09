import { rolUsuario } from "./enums";

export interface Usuario {
    id: number,
    nombre: string,
    correoElectronico: string,
    contrasenya: string,
    rol: rolUsuario
}