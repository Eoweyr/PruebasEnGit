interface CustomElementConfig {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
}

const ValidarSelector = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('Necesitas poner un - como mínimo.'); 
    }
};

const CustomElement = (config: CustomElementConfig) => (cls: any) => {
    ValidarSelector(config.selector);
    if (!config.template) {
        throw new Error('Es necesario establecer un template')
    }
    const Template = document.createElement('template');
    if(config.style) {
        config.template = `<style>${config.style}</style>${config.template}`;
        Template.innerHTML = config.template;
    }
    const ConnectedCallback = cls.prototipe.ConnectedCallback || function() {};
    cls.prototipe.ConnectedCallback=function() {
        const Clone = document.importNode(Template.content, true);
        if (config.useShadow) {
            this.attachShadow({mode: 'open'}).appendChild(Clone);
        } else {
            this.appenChild(Clone)
        }
        ConnectedCallback.call(this);
    };
    window.customElements.define(config.selector, cls)
}

@CustomElement({
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

class MyName extends HTMLElement {
    connectedCallback() {
        const elm = document.createElement('h3');
        elm.textContent = 'Boo!';
        this.shadowRoot.appendChild(elm);
    }
}