import {BaseComponent} from "./BaseComponent.js";

class MangaContainer extends BaseComponent {
    constructor() {
        super();
        this.props = {
            image: '',
            name: '',
            view: '',
            likes: ''
        };
    }

    static get observedAttributes() {
        return ['image', 'name', 'view', 'likes'];
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>

            </style>

            <div class="manga-container">
                <div class="upper">
                    <img src="${this.props.image}" alt="img">
                    <div class="info">
                        <div class="view>
                            <i class="far fa-eye"></i>
                            <p id="view">${this.props.view}</p>
                        </div>
                        <div class="likes>
                            <i class="far fa-heart"></i>
                            <p id="likes">${this.props.likes}</p>
                        </div>
                    </div>
                </div>
                <div class="lower">
                    <p id="name">${this.props.name}</p>
                </div>
            </div>
        `;
    }
}

window.customElements.define('manga-container', MangaContainer);