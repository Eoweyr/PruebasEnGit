class navComponente extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        let estilo = `
            <style>
                nav {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 40px;
                    color: white;
                    background-color: black;
                    line-height: 40px;
                    text-align: center;
                }

                .logo {
                    width: 100px;
                    margin-left: 20px;
                    padding: 3px;
                    color: white;
                    font-size: 36px;
                }

                .opMenu {
                    width: 60%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    line-height: 40px;
                }

                button {
                    width: 100px;
                    height: 36px;
                    margin-right: 20px;
                    border: 2px solid white;
                    color: white;
                    background-color: black;
                }
            </style>
        `;

        this.shadowRoot.innerHTML = estilo;

        let nav = `
            <nav>
                <div class="logo" id="logo">MPF</div>
                <div class="opMenu" id="opMenu"></div>
                <button type="button">Acceder</button>
            </nav>
        `;

        this.shadowRoot.innerHTML += nav;
        
    }

    connectedCallback() {
        
        let opMenu = this.shadowRoot.getElementById('opMenu');
        let opcionesMenuPrincipal = ["Caracteristicas", "Servicios", "Contratar", "Contacto"];

        opcionesMenuPrincipal.forEach(op => {
            let div = document.createElement('div');
            div.innerText = op;
            opMenu.appendChild(div);
        });

    }
}

window.customElements.define("nav-componente", navComponente);