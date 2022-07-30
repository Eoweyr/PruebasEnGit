"use strict";
const SINACCION = () => { };
const validarSelecector = (selector) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('Necesitas poner al menos un guion -');
    }
};
const componentePersonalizado = (config) => (cls) => {
    validarSelecector(config.selector);
    if (!config.plantilla) {
        throw new Error('Se necesita una plantialla para el elemento');
    }
    const PLANTILLA = document.createElement('template');
    if (config.estilo) {
        config.plantilla = `
            <style>
                ${config.estilo}
            </style>
            ${config.plantilla}
        `;
    }
    PLANTILLA.innerHTML = config.plantilla;
    const connectedCallback = cls.prototype.connectedCallback || SINACCION;
    const disconectedCallback = cls.prototype.disconectedCallback || SINACCION;
    cls.prototype.connectedCallback = function () {
        const CLONE = document.importNode(PLANTILLA.content, true);
        if (config.usaShadow) {
            this.attachShadow({ mode: 'open' }).appendChild(CLONE);
        }
        else {
            this.appendChild(CLONE);
        }
        if (this.componentWillMount) {
            this.componentWillMount();
        }
        connectedCallback.call(this);
        if (this.componentDidMount) {
            this.componentDidMount();
        }
    };
    cls.prototype.DISCONECTEDCALLBACK = function () {
        if (this.componentWillUnmount) {
            this.componentWillUnmount();
        }
        disconectedCallback.call(this);
        if (this.componentDidUnmount) {
            this.componentDidUnmount();
        }
    };
    window.customElements.define(config.selector, cls);
};
