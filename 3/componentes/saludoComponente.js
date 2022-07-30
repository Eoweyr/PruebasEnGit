"use strict";
/* import { CustomElement } from "../decoradores/customElement"; */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MyName = class MyName extends HTMLElement {
    connectedCallback() {
        var _a;
        const elm = document.createElement('h3');
        elm.textContent = 'Boo!';
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(elm);
        console.log('connected callback');
    }
    disconnectedCallback() {
        console.log('disconnected callback');
    }
    componentWillMount() {
        console.log('component will mount');
    }
    componentDidMount() {
        console.log('component did mount');
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    componentDidUnmount() {
        console.log('component did unmount');
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
