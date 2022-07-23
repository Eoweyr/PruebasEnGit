"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let saludoComponente = class saludoComponente extends HTMLElement {
    connectedCallback() {
        var _a;
        const ELM = document.createElement('h2');
        ELM.textContent = 'Hola Mundo!';
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(ELM);
    }
};
saludoComponente = __decorate([
    CUSTOMELEMENT({
        selector: 'saludo-componente',
        template: '<div>Hola</div>',
        style: `
        host: {
            position: absolute;
            bottom: 0px;
            left: 0px;
        }
    `,
        useShadow: true
    })
], saludoComponente);
