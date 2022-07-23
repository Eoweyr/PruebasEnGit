@CUSTOMELEMENT({
    selector: 'saludo-componente',
    template: '<div>Hola</div>',
    style: `
        host: {
            text-align: center;
        }
    `,
    useShadow: true
})

class saludoComponente extends HTMLElement {
    connectedCallback() {
        const ELM = document.createElement('h2');
        ELM.textContent = 'Hola Mundo!';
        this.shadowRoot?.appendChild(ELM);

    } 
}