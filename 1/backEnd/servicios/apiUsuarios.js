const usuariosJson = "http://localhost:3000/usuarios";
const peticion = new XMLHttpRequest();

peticion.open('GET', usuariosJson);
peticion.responseType = 'json';
peticion.send;
peticion.onload = function() {
    const usuarios = peticion.response;
}