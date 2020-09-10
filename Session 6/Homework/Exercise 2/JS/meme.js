import {BaseComponent} from "./basecomponent.js";

class Meme extends BaseComponent {
    constructor() {
        super();
        this.props = {
            name: '',
            image: '',
            description: '',
            "date-modified": new Date().toISOString()
        }
    }

    static get observedAttributes() {
        return ['name', 'image', 'description', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = `
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="./css/meme.css">
            <div class="meme">
                <img src="${this.props.image}" alt="img">
                <div class="info">
                    <h1 class="name">${this.props.name}</h1>
                    <p class="description">${this.props.description}</p>
                    <p class="date-modified">${this.props["date-modified"]}</p>
                </div>
            </div>
        `;
    }
}

window.customElements.define('meme-container', Meme);