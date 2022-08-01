"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let navComponente = class navComponente extends HTMLElement {
    connectedCallback() {
        let itemsMenu = [];
        itemsMenu = ["Características", "Servicios", "Contrata", "Contacto", "Hola"];
        let accionesNav = document.getElementById("accionesNav");
        itemsMenu.forEach(element => {
            console.log(element);
        });
    }
};
navComponente = __decorate([
    componentePersonalizado({
        selector: 'nav-componente',
        estilo: `
        .nombreEmpresa { 
            font-size: 36px;
            margin-left: 20px
        }

        .navMain {
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: white;
            background-color: black;
        }

        .accionesNav {
            width: 500px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .acciones div:hover {
            color: red;
            cursor: pointer;
        }

        button {
            margin-right: 20px;
            width: 100px;
            height: 36px;
            font-size: 16px;
            color: white;
            background-color: black;
            border: 2px solid white;
            cursor: pointer;
        }

        button:hover {
            color: red;
            background-color: gray;
        }
        `,
        plantilla: `
        <div class="navMain" id="navMain">
            <div class="nombreEmpresa">MPF</div>
            <div class="accionesNav" id="accionesNav">
                <!--<div>Características</div>
                <div>Servicios</div>
                <div>Contrata</div>
                <div>Contacto</div>-->
            </div>
            <button type="button">Acceder</button>
        </div>
        `,
        usaShadow: true
    })
], navComponente);
