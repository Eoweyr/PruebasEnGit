
@componentePersonalizado({
    selector: 'nav-componente',
    estilo: `
        .nombreEmpresa { 
            font-size: 36px;
            margin-left: 20px
        }

        .navMain {
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: white;
            background-color: black;
        }

        .accionesNav {
            width: 500px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .acciones div:hover {
            color: red;
            cursor: pointer;
        }

        button {
            margin-right: 20px;
            width: 100px;
            height: 36px;
            font-size: 16px;
            color: white;
            background-color: black;
            border: 2px solid white;
            cursor: pointer;
        }

        button:hover {
            color: red;
            background-color: gray;
        }
        `,
    plantilla: `
        <div class="navMain" id="navMain">
            <div class="nombreEmpresa">MPF</div>
            <div class="accionesNav" id="accionesNav">
                <!--<div>Características</div>
                <div>Servicios</div>
                <div>Contrata</div>
                <div>Contacto</div>-->
            </div>
            <button type="button">Acceder</button>
        </div>
        `,
    usaShadow: true
})

class navComponente extends HTMLElement {

    connectedCallback() {

        let itemsMenu: string[] = [];
        itemsMenu = ["Características", "Servicios", "Contrata", "Contacto", "Hola"];

        let accionesNav = shadowRoot.getElementById("accionesNav");
        
        itemsMenu.forEach(element => {
            console.log(element);

            let div = this.shadowRoot.createElement("div");
            div.innerHTML = element;
            accionesNav.appendChild(div);


        });
        
    }
}