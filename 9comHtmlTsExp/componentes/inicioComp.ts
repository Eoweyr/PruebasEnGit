class inicioComp extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        let estilo = `
            <style>
            </style>
        `;
        let nav = `
            <h1>Página de inicio</h1>
        `;

        shadow.innerHTML = estilo;
        shadow.innerHTML += nav;
    }
    
    
    connectedCallback() {
        this.shadowRoot;
        console.log('hola');
    }    
}

window.customElements.define("inicio-componente", inicioComp);
