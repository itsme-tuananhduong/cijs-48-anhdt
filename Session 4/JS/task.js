import {BaseComponent} from "./basecomponent.js";

class Task extends BaseComponent {
    constructor() {
        // vi noi dung cua 1 task do thuoc tinh quyet dinh. ma thuoc tinh duoc truyen tu ngoai
        // => props
        super();
        this.props = {
            "content": '',
            "is-completed": false,
            "date-modified": null
        };
    }

    static get observedAttributes() {
        return ['content', 'is-completed', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = `
        <div class"task">
            <div id="content">${this.props.content}</div>
            <div id="is-completed">${this.props["is-completed"]}</div>
            <div id="date-modified">${this.props["date-modified"]}</div>
        </div>
        `;
    }
}

window.customElements.define('task-container', Task);