"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUsuarios_1 = __importDefault(require("./routers/routerUsuarios"));
const app = (0, express_1.default)();
const port = 3004;
app.use(express_1.default.json());
app.use('/usuarios', routerUsuarios_1.default);
app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto: ${port}`);
});
