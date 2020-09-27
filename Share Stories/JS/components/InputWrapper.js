import {BaseComponent} from "../BaseComponent.js";

const style = /*html*/ `
<style>
    * {
        font-family: 'Quicksand', sans-serif;
    }

    .input-label {
        text-transform: uppercase;
    }

    .input-main {
        width: 500px;
        height: 25px;
        border: 2px solid #b66d0d;
        background: transparent;
        border-radius: 5px 0px 0px 5px;
    }

    .input-error {
        color: #e62e00;
    }
</style>
`;

class InputWrapper extends BaseComponent {
    constructor() {
        super();

        this.props = {
            label: '',
            type: 'text',
            error: '',
            value: ''
        };
    }

    static get observedAttributes() {
        return ['label', 'type', 'error', 'value'];
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="input-wrapper">
                <label class="input-label" for="input">${this.props.label}</label>
                <input class="input-main" type="${this.props.type}" value="${this.props.value}">
                <div class="input-error">${this.props.error}</div>
            </div>
        `;
    }

    get value() {
        return this._shadowRoot.querySelector('.input-main').value;
    }
}

window.customElements.define('input-wrapper', InputWrapper);