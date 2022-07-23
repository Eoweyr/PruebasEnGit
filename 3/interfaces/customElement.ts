interface CustomElementConfig {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
}

const VALIDARSELECTOR = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error ('El nombre del selector necesita al menos un - .');
    }
};

const CUSTOMELEMENT = (config: CustomElementConfig) => (cls: CustomElementConstructor) => {
    VALIDARSELECTOR(config.selector);

    if (!config.template) {
        throw new Error ('Necesita pasar una plantilla al elemento.')
    }

    const PLANTILLA = document.createElement('template');

    if (config.style) {
        config.template = `<style>${config.style}</style>
        ${config.template}`;
    }

    PLANTILLA.innerHTML = config.template;

    const CONNECTEDCALLBACK = cls.prototype.CONNECTEDCALLBACK || function () {};

    cls.prototype.CONNECTEDCALLBACK = function() {
        const CLONE = document.importNode(PLANTILLA.content, true);

        if (config.useShadow) {
            this.attachShadow({mode: 'open'}).appenChild(CLONE);
        } else {
            this.appenChild(CLONE);
        }

        CONNECTEDCALLBACK.call(this);
    }

    window.customElements.define(config.selector, cls)

}
