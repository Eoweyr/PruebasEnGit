class navComponente extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        let estilo = `
            <style>
                nav {
                    width: 100%;
                    height: 40px;
                    color: white;
                    background-color: black;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0px 5px 5px gray;
                }

                .logo {
                    color: white;
                    font-size: 32px;
                    margin-left: 20px;
                }

                .menuPrincipal {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    width: 60%;
                    height: 40px;
                }

                .opcion:hover {
                    color: red;
                    cursor: pointer;
                }

                button {
                    margin-right: 20px;
                    width: 100px;
                    height: 32px;
                    color: white;
                    background-color: black;
                    border: 2px solid white;
                }

                button:hover {
                    color: red;
                    cursor: pointer;
                }
            </style>
        `;
        let nav = `
            <nav>
                <div id="logo" class="logo">MPF</div>
                <div id="menuPrincipal" class="menuPrincipal"></div>
                <button type="button" id="btnAcceder">Acceder</button>
            </nav>
        `;

        shadow.innerHTML = estilo;
        shadow.innerHTML += nav;
    }

    opcionesMenuPrincipal: string[] = [];
    
    
    connectedCallback() {
        const esNull = () => {};
        this.opcionesMenuPrincipal = ["Inicio", "Caracteristicas", "Servicios", "Contratar", "Contacto"]

        this.opcionesMenuPrincipal.forEach(opcion => {    
            let menuOpcion = this.shadowRoot?.getElementById('menuPrincipal') as HTMLElement || esNull;
            let div = document.createElement('div');
            div.innerHTML = opcion;
            div.classList.add("opcion");
            div.setAttribute("onclick", "")
            menuOpcion.appendChild(div);

            div.addEventListener('click', () => {
                console.log(opcion);
            })
        })

        const button = this.shadowRoot?.getElementById('btnAcceder') as HTMLElement || esNull;
        button.addEventListener('click', () => {
            console.log("Acceder");
        })

    }    
}

window.customElements.define("nav-componente", navComponente);
