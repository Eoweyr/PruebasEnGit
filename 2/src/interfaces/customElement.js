"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ValidarSelector = (selector) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('Necesitas poner un - como mínimo.');
    }
};
const CustomElement = (config) => (cls) => {
    ValidarSelector(config.selector);
    if (!config.template) {
        throw new Error('Es necesario establecer un template');
    }
    const Template = document.createElement('template');
    if (config.style) {
        config.template = `<style>${config.style}</style>${config.template}`;
        Template.innerHTML = config.template;
    }
    const ConnectedCallback = cls.prototipe.ConnectedCallback || function () { };
    cls.prototipe.ConnectedCallback = function () {
        const Clone = document.importNode(Template.content, true);
        if (config.useShadow) {
            this.attachShadow({ mode: 'open' }).appendChild(Clone);
        }
        else {
            this.appenChild(Clone);
        }
        ConnectedCallback.call(this);
    };
    window.customElements.define(config.selector, cls);
};
let MyName = class MyName extends HTMLElement {
    connectedCallback() {
        const elm = document.createElement('h3');
        elm.textContent = 'Boo!';
        this.shadowRoot.appendChild(elm);
    }
};
MyName = __decorate([
    CustomElement({
        selector: 'ce-my-name',
        template: `<div>My name is Inigo Montoya</div>
               <div>You killed my father</div>
               <div>Prepare to die!</div>`,
        style: `:host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;     
      padding: 16px;         
      border-top: 1px solid black;
      font-size: 24px;
    }`,
        useShadow: true
    })
], MyName);
