"use strict";
const noop = () => { };
const validateSelector = (selector) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};
const CustomElement = (config) => (cls) => {
    validateSelector(config.selector);
    if (!config.template) {
        throw new Error('You need to pass a template for the element');
    }
    const template = document.createElement('template');
    if (config.style) {
        config.template = `<style>${config.style}</style> ${config.template}`;
    }
    template.innerHTML = config.template;
    const connectedCallback = cls.prototype.connectedCallback || noop;
    const disconnectedCallback = cls.prototype.disconnectedCallback || noop;
    cls.prototype.connectedCallback = function () {
        const clone = document.importNode(template.content, true);
        if (config.useShadow) {
            this.attachShadow({ mode: 'open' }).appendChild(clone);
        }
        else {
            this.appendChild(clone);
        }
        if (this.componentWillMount) {
            this.componentWillMount();
        }
        connectedCallback.call(this);
        if (this.componentDidMount) {
            this.componentDidMount();
        }
    };
    cls.prototype.disconnectedCallback = function () {
        if (this.componentWillUnmount) {
            this.componentWillUnmount();
        }
        disconnectedCallback.call(this);
        if (this.componentDidUnmount) {
            this.componentDidUnmount();
        }
    };
    window.customElements.define(config.selector, cls);
};
/* export { CustomElement }; */ 
