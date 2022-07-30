/* import { CustomElement } from "../decoradores/customElement"; */

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
        this.shadowRoot?.appendChild(elm);
        console.log('connected callback');

        let algo = "hola";
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
}